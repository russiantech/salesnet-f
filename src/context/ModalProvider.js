import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(ModalContext.Provider, { value: { showModal, hideModal }, children: [children, _jsxs(Suspense, { fallback: null, children: [modal === "publish" && _jsx(Publish, { ...modalProps, onClose: hideModal }), modal === "canvas" && _jsx(Canvas, { ...modalProps, onClose: hideModal })] })] }));
};
