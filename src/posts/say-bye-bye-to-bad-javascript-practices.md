---
  title: Say bye bye to bad javascript practices
  slug : say-bye-bye-to-bad-javascript-practices
  meta : When we take our first steps into the wonderful world of programming, we get to see for ourselves what it does for millions of people. It’s thanks to programming that the lives
---

# Say bye bye to bad javascript practices

APRIL 24, 2023 | WRITTEN BY VISHWAS GOPINATH

<img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F77f866290d044b118268f88b0128e427" alt="something">

<br/>
<br/>

When we take our first steps into the wonderful world of programming, we get to see for ourselves what it does for millions of people. It’s thanks to programming that the lives of so many are made easier, just by pressing a few keys on their devices (This is magic).

<br/>
<br/>
Programming is another kind of superpower, but as Uncle Ben said to his nephew, Peter Parker, “With great power comes great responsibility.” In the world of programming, our greatest responsibility is to ensure that the code we write is both easily testable and will remain maintainable over time.

<br/>
<br/>
There are some small practices in programming that can have a continuously negative impact on the code we write and the product we create as the end result. I’ve experienced these issues firsthand. It’s important to share what they are and why you should avoid them at all costs.

<br/>
<br/>
  1. Using var instead of let and const
  It’s time to say goodbye to using var.
  
  You should use only let and const for these reasons:
  
  ● The scope is clearer (between braces).
  
  ● It does not create global objects.

● It flags errors if you redeclare them.

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
