import { Component, createSignal } from "solid-js";
import { useLocation, useNavigate } from "solid-app-router";
import Button from "./Button";
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
        <Button
          onClick={() => setShowModal(true)}
          icon="add"
          label="Add Request"
        />
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
