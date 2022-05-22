import { useState, useEffect } from "react";
import "./App.css";
import PromptInputForm from "./components/PromptInputForm";
import ResponsesSection from "./components/ResponsesSection";
import ResponseLoadingSkeleton from "./components/ResponseLoadingSkeleton";

import fetchCompletion from "./services/service";
import { getStorage, setStorage } from "./services/storage";

function App() {
  //
  const [responsesData, setResponsesData] = useState([]);
  const [pendingFetch, setPendingFetch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
  // Retrieve stored response from localStorage and set in current state;
	(async () => {
		const store = await getStorage();
	
		if(store) {
			setResponsesData(store);
		}
	})()
  }, []);

  useEffect(()=> {
	if(responsesData.length>0){
		setStorage(responsesData);
	}
  }, [responsesData]);

  const onFormSubmit = (userText) => {
    let found = responsesData.find((r) => r.prompt === userText);
    let newMessage = "";

    if (userText === "") {
      newMessage = "Enter a phrase or a statement";
    } else if (found) {
      newMessage = "You have already asked that question";
    } else {
      updateResponses(userText);
    }

    setMessage(newMessage);
    return !found;
  };

  const updateResponses = async (newPromptText) => {
    if (loading) return;
    setLoading(true);
    const newResponse = {
      prompt: newPromptText,
      response: "Fetching response...",
    };

    setPendingFetch(newResponse);

    const completion = await fetchCompletion(newPromptText);

    newResponse.response = completion.choices.map((c) => c.text);

    setPendingFetch(null);
    setResponsesData((prevResponses) => [newResponse, ...prevResponses]);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fun with AI</h1>
		<p>An OpenAI text completion API test tool. Using the Curie engine.</p>
      </header>
      <main className="mt-3">
        <PromptInputForm onSubmit={onFormSubmit} loading={loading} info={message} />
        <ResponsesSection 
			data={responsesData} 
			loadingSkeleton={pendingFetch ? <ResponseLoadingSkeleton data={pendingFetch} /> : false}
		/>
      </main>
	  <hr/>
      <article className="my-3 fs-5 fw-light">
        The Curie engine is good at Language translation, complex classification, text sentiment, summarization. Given a prompt, the tool will return one or
        more predicted completions.
      </article>
    </div>
  );
}

export default App;
