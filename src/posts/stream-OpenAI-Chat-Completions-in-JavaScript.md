---
title: Stream OpenAI Chat Completions in JavaScript
slug : stream-OpenAI-Chat-Completions-in-JavaScript
meta : Stream OpenAI Chat Completions in JavaScriptStream OpenAI Chat Completions in JavaScriptStream OpenAI Chat Completions in JavaScriptStream OpenAI Chat Completions in JavaScript
---

# Stream OpenAI Chat Completions in JavaScript

APRIL 24, 2023 | WRITTEN BY VISHWAS GOPINATH

<img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F77f866290d044b118268f88b0128e427" alt="something">

<br/>
<br/>

AI-powered apps are a popular trend in the tech community, with many amazing AI-powered apps already out there. If you're interested in building your own AI app, leveraging the power of the OpenAI API is a great place to start.

<br/>
<br/>
In this blog post, we'll show you how to use the OpenAI API in a vanilla JavaScript app, providing you with a solid foundation to kickstart your journey in building your own AI-powered applications. We'll also explore the concept of streaming completions from the OpenAI API, which will allow us to enhance the user experience.

<br/>
<br/>
We will build an HTML, Tailwind CSS, and vanilla JavaScript app where the user enters a prompt, and OpenAI responds to that prompt. The response is displayed to the user in real-time similar to ChatGPT. Check out the demo below to see what we'll be building:

<br/>
<br/>

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="<https://cdn.tailwindcss.com>"></script>
    <title>Streaming OpenAI API Completions in JavaScript</title>
    <script type="module" src="index.js"></script>
  </head>
  <body
    class="bg-white text-black min-h-screen flex items-center justify-center"
  >
    <div class="lg:w-1/2 2xl:w-1/3 p-8 rounded-md bg-gray-100">
      <h1 class="text-3xl font-bold mb-6">
        Streaming OpenAI API Completions in JavaScript
      </h1>
      <div id="resultContainer" class="mt-4 h-48 overflow-y-auto">
        <p class="text-gray-500 text-sm mb-2">Generated Text</p>
        <p id="resultText" class="whitespace-pre-line"></p>
      </div>
      <input
        type="text"
        id="promptInput"
        class="w-full px-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-4"
        placeholder="Enter prompt..."
      />
      <div class="flex justify-center mt-4">
        <button
          id="generateBtn"
          class="w-1/2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 focus:outline-none mr-2 disabled:opacity-75 disabled:cursor-not-allowed"
        >
          Generate
        </button>
        <button
          id="stopBtn"
          disabled
          class="w-1/2 px-4 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none ml-2 disabled:opacity-75 disabled:cursor-not-allowed"
        >
          Stop
        </button>
      </div>
    </div>
  </body>
</html>
```
