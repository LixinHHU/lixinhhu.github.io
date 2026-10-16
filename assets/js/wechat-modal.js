(function () {
  "use strict";
  function initWeChatModal() {
    var modal = document.getElementById("wechat-modal");
    if (!modal) return;
    var dialog = modal.querySelector(".wechat-modal__dialog");
    var openers = document.querySelectorAll("[data-wechat-open]");
    var lastFocused;
    function openModal(event) {
      event.preventDefault();
      lastFocused = document.activeElement;
      modal.hidden = false;
      document.body.classList.add("wechat-modal-open");
      Array.prototype.forEach.call(openers, function (opener) { opener.setAttribute("aria-expanded", "true"); });
      dialog.querySelector("button").focus();
    }
    function closeModal(event) {
      if (event) event.preventDefault();
      modal.hidden = true;
      document.body.classList.remove("wechat-modal-open");
      Array.prototype.forEach.call(openers, function (opener) { opener.setAttribute("aria-expanded", "false"); });
      if (lastFocused) lastFocused.focus();
    }
    Array.prototype.forEach.call(openers, function (opener) { opener.addEventListener("click", openModal); });
    Array.prototype.forEach.call(modal.querySelectorAll("[data-wechat-close]"), function (closer) { closer.addEventListener("click", closeModal); });
    document.addEventListener("keydown", function (event) {
      if (modal.hidden) return;
      if (event.key === "Escape") closeModal(event);
      if (event.key === "Tab") {
        var controls = dialog.querySelectorAll("button, a[href]");
        var first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initWeChatModal);
  else initWeChatModal();
})();
