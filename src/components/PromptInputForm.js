import React, {useState} from "react";

export default function PromptInputForm({ data, onSubmit, loading, info }) {

  const [promptValue, setPromptValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const handled = onSubmit(promptValue);

    if(handled) {
      setPromptValue("");
    }
  };

  return (
    <form id="prompt-form" className="row" onSubmit={handleFormSubmit}>
      <div className="col-md-12">
        <label htmlFor="prompt-area">
          <strong>Enter prompt</strong>
        </label>
        <textarea name="prompt" value={promptValue} 
          onChange={e => setPromptValue(e.target.value)}
          className="form-control mb-3 mt-1" rows={4} data-gramm="false"
        />
      </div>
      <div className="col-md-12 d-flex justify-content-end">
        {
          info &&
          <div className="alert alert-warning m-0 mx-3 p-1" role="alert">
            {info}
          </div>
        }
        <button className="btn btn-primary" disabled={loading} type="submit">
          {loading ? "loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
