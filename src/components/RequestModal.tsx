import {
  Component,
  ComponentProps,
  Show,
  createSignal,
  onMount,
  onCleanup,
} from "solid-js";
import ClientForm from "../components/ClientForm";
import { IRestRequest } from "../interfaces/rest.interfaces";

interface RequestModalProps extends ComponentProps<any> {
  show: boolean;
  onModalHide: (id: string | null) => void;
  request?: IRestRequest;
}

const RequestModal: Component<RequestModalProps> = (
  props: RequestModalProps
) => {
  const [modalRef, setModalRef] = createSignal<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef() && !modalRef().contains(event.target as Node)) {
      props.onModalHide(null);
    }
  };

  // Add event listener on component mount
  onMount(() => {
    document.addEventListener("click", handleClickOutside);
  });

  // Remove event listener on component unmount
  onCleanup(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return (
    <Show when={props.show}>
      <div class="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.75)]">
        <div
          ref={setModalRef}
          class="relative flex flex-col items-center justify-center max-h-[85%] overflow-y-auto top-20 bg-gray-200 max-w-md m-auto p-8 pb-8 border-t-4 border-blue-600 rounded-sm shadow-xl"
        >
          <h5 class="text-4xl font-bold mb-4">
            {(props.request ? "Edit" : "Create") + " Request"}
          </h5>
          <span class="absolute bottom-9 right-8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </span>
        </div>
      </div>
    </Show>
  );
};

export default RequestModal;
