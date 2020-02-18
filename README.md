# Project Description
This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites by giving the destination URL. Using an exciting new api called Aylien.
This tool will give us back pertinent information about the article, whether the content is subjective or objective, whether it is positive, neutral, or negative in tone and the evaluated article with some basic information.

# Project Instructions
- `npm run build-dev`: to run development mode
- `npm run build-prod`: to build the production version of the project
- `npm run start`: to run the express server
- `npm run test`: to test the project functionallities, make sure that the express server is started first

## Getting started
- execute the command: `npm install` to install the required packages.

## Setting up the API

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```
- [ ] Create a new ```.env``` file in the root of the project
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```