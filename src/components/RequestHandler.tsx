import type { Component } from "solid-js";

const RequestHandler: Component = () => {
  return (
    <div class="text-black flex gap-32 border-blue-100 m-3 justify-center items-start text-center">
      <h1 class="font-medium text-xl py-2">Api Client</h1>
      <button
        onClick={() => alert("This will be added soon hopefully")}
        class="bg-blue-500 hover:bg-blue-600 text-white text-lg px-4 py-2 rounded-full"
      >
        +
      </button>
    </div>
  );
};

export default RequestHandler;
