(function () {
  "use strict";

  var header = document.getElementById("site-header");
  if (header) {
    function onScroll() {
      if (window.scrollY > 8) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  var WA_NUMBER = "393926322720";
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var statusEl = document.getElementById("form-status");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!contactForm.reportValidity()) return;

      var hp = contactForm.elements.namedItem("website_field");
      if (hp && hp instanceof HTMLInputElement && hp.value) return;

      var nome = "";
      var cell = "";
      var emailEl = contactForm.elements.namedItem("email");
      var tipoEl = contactForm.elements.namedItem("tipo");
      var msgEl = contactForm.elements.namedItem("messaggio");
      var n = contactForm.elements.namedItem("nome");
      var c = contactForm.elements.namedItem("cell");
      if (n instanceof HTMLInputElement) nome = n.value.trim();
      if (c instanceof HTMLInputElement) cell = c.value.trim();
      var email = "";
      if (emailEl instanceof HTMLInputElement) email = emailEl.value.trim();
      var tipo = "Non specificato";
      if (tipoEl instanceof HTMLSelectElement) tipo = tipoEl.value;
      var messaggio = "";
      if (msgEl instanceof HTMLTextAreaElement) messaggio = msgEl.value.trim();

      var lines = [
        "Ferari Impianti — richiesta dal sito",
        "",
        "Nome: " + nome,
        "Telefono: " + cell,
      ];
      if (email) lines.push("Email: " + email);
      lines.push("Tipo problema: " + tipo, "", messaggio);

      var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener,noreferrer");

      if (statusEl) {
        statusEl.textContent =
          "Se non si è aperta una finestra WhatsApp, controlla il blocco pop-up sul browser.";
        statusEl.classList.remove("hidden", "text-red-400", "text-teal-300");
        statusEl.classList.add("text-slate-300");
      }
    });
  }
})();
