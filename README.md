# Text completion with ai


### Installation
```
npm install
npm start
```

### Demo
https://extraordinary-cascaron-f22fc7.netlify.app/

### About the project

The app provides a simple interface to interact with the OpenAi completions API.

### Features

1. A form for entering text prompts
2. Submitting the form sends the prompt to the OpenAI API and shows fetching UI.
3. Results are displayed in a list, sorted from newest to oldest. Result includes the original prompt and a response from the API.
4. A new submission is checked against previous responses to prevent repeat submission.
5. The responses are stored on the client's localStorage and retrieved on load.
