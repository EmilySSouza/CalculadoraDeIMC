export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),


  open() {
    Modal.wrapper.classList.toggle("open");
  },
  close() {
    Modal.wrapper.classList.toggle("open");
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close();
}

window.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
  if (event.key === 'Escape' && Modal.wrapper.classList.contains("open")) {
    Modal.close();
  }
}