(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModal);
  refs.closeModalBtn.addEventListener("click", onCloseModal);
  refs.backdrop.addEventListener("click", onBackdropClick);

  

  function onOpenModal() {
    refs.backdrop.classList.remove("is-hidden");
    window.addEventListener('keydown', onEscPressKey)
  }
  function onCloseModal() {
    refs.backdrop.classList.add("is-hidden");
    window.removeEventListener('keydown',onEscPressKey)
  }
  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
    onCloseModal()
    }
  }
  function onEscPressKey(evt) {
    if (evt.code === 'Escape') {
      onCloseModal()
    }
  }
})();

