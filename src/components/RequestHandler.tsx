import { Component, createSignal } from "solid-js";
import {
  hashIntegration,
  Route,
  Router,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "solid-app-router";
import { restRequests } from "../store";
import RequestModal from "./RequestModal";

const RequestHandler: Component = () => {
  const [showModal, setShowModal] = createSignal(false);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div class="text-black flex gap-32 border-blue-100 m-3 justify-center items-start text-center">
      <h1 class="font-medium text-xl py-2">Api Client</h1>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white text-lg px-4 py-2 rounded-full"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
        <RequestModal
          show={showModal()}
          onModalHide={(id: string | null) => {
            setShowModal(true);
          }}
        />
      </div>
    </div>
  );
};

export default RequestHandler;
