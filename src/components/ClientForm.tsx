import { Component } from "solid-js";
import { IRestRequest } from "../interfaces/rest.interfaces";

export const RestClientForm: Component<{
  request?: Partial<IRestRequest>;
  formSubmit: Function;
  formUpdate?: Function;
  actionBtnText: string;
}> = (props) => {
  return (
    <form
      action=""
      class="space-y-4"
      classList={{}}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div class="grid grid-cols-1 gap-4">
        <div>
          <label for="name" class="mb-4 block">
            Name
          </label>
          <input placeholder="name" />
        </div>
        <div>
          <label for="url" class="mb-4 block">
            URL
          </label>
          <input placeholder="url" />
        </div>

        <div>
          <label class="my-4 block">Method</label>
          <input placeholder="method" />
        </div>
      </div>
      <div>
        <label class="my-4 block">Body</label>
        <input placeholder="body" />
      </div>

      <div class="mt-4">
        <button
          disabled={false}
          type="submit"
          class="inline-flex items-center disabled:bg-gray-500 justify-center w-full px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg sm:w-auto"
        >
          <span class="font-medium"> {props.actionBtnText} </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
