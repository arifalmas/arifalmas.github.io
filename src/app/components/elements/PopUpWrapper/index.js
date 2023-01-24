import Popup from "reactjs-popup";
import "./Popup.css";

function PopUpWrapper({
  open = false,
  children,
  onClose,
  className,
  ...rest
}) {
  return (
    <Popup open={open} closeOnDocumentClick onClose={onClose} {...rest}>
      <div className="modal border border-gray-600 rounded-md">{children}</div>
    </Popup>
  );
}

export default PopUpWrapper;
