import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
  <>
    {isOpen && (
      <div className="grid place-items-center absolute top-0 z-40 h-screen w-screen backdrop-blur">
      <div className="z-50 m-auto relative min-h-[200px] min-w-[80%] p-3 bg-white ">
        <div className="flex justify-end">
          <AiOutlineClose onClick={onClose} className="text-2xl"/> 
        </div>
        {children}
      </div>
      </div>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;