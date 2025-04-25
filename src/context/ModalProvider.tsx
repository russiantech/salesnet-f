import { createContext, useState, useContext, lazy, Suspense } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const Publish = lazy(() => import("../components/shared/modals/publish/Publish"));
const Canvas = lazy(() => import("../components/shared/modals/Canvas"));

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const [modalProps, setModalProps] = useState({});

  const showModal = (type, props = {}) => {
    setModal(type);
    setModalProps(props);
  };

  const hideModal = () => {
    setModal(null);
    setModalProps({});
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}

      {/* Only render modal when it's triggered */}
      <Suspense fallback={null}>
        {modal === "publish" && <Publish {...modalProps} onClose={hideModal} />}
        {modal === "canvas" && <Canvas {...modalProps} onClose={hideModal} />}
      </Suspense>
    </ModalContext.Provider>
  );
};
