const COMPLETIONS_URL = "https://api.openai.com/v1/engines/text-curie-001/completions";
// const BASE_URL = "https://api.openai.com/v1/engines/";



// const ENGINE_NAMES_MAPPING = {
//   CURIE: "text-curie-001"
// }

export default async function fetchCompletion(text) {
  /*
  * example "Write a poem about a dog wearing skis"
  */
    const data = {
        prompt: text,
        temperature: 0.1,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };

    const response = await fetch(COMPLETIONS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        body: JSON.stringify(data),
      });

    return await response.json();
}