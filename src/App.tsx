import { Component, For, createSignal } from "solid-js";
import {
  hashIntegration,
  Route,
  Router,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "solid-app-router";
import RequestHandler from "./components/RequestHandler";
import { restRequests } from "./store";
import Hero from "./components/Hero";
import RequestModal from "./components/RequestModal";

const App: Component = () => {
  return (
    <div class="flex items-center justify-start">
      <Router source={hashIntegration()}>
        <div class="max-w-[97%]">
          <div class="h-[94vh] m-5 bg-gray-100 text-black rounded-xl w-full flex flex-col gap-4 items-center">
            <RequestHandler />
            <For each={restRequests()} fallback={<div>Loading...</div>}>
              {(item) => (
                <Link href={`/${item.id}`}>
                  <div class="border-2 border-black max-w-[15rem] p-4 text-xl bg-gray-100 hover:bg-gray-300 cursor-pointer rounded-lg mb-2">
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
        <Hero />
      </Router>
    </div>
  );
};

export default App;
