import { Component, For } from "solid-js";
import { hashIntegration, Route, Router, Routes, Link } from "solid-app-router";
import RequestHandler from "./components/RequestHandler";
import { restRequests } from "./store";

const App: Component = () => {
  return (
    <div class="flex items-center justify-start">
      <Router source={hashIntegration()}>
        <div class="max-w-[97%]">
          <div class="h-[90vh] m-4 bg-gray-100 text-black rounded-md w-full flex flex-col gap-4 items-center">
            <RequestHandler />
            <For each={restRequests()} fallback={<div>Loading...</div>}>
              {(item) => (
                <Link href={`/${item.id}`}>
                  <div class="border-2 border-black max-w-[18rem] p-4 text-xl bg-gray-100 hover:bg-gray-300 cursor-pointer rounded-lg mb-2">
                    <div>{item.name}</div>
                    <div class="text-xs break-all">
                      {item.request.method} {item.request.url}
                    </div>
                  </div>
                </Link>
              )}
            </For>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
