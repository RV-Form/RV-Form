const translations = {
  en: {
    start: "Start",
    about: "About us",
    products: "Products",
    contact: "Contact",
    welcome: "Welcome to RV-Form",
    intro: "We offer high-quality plastic products at great prices.",
    aboutText: "RV-Form was founded by two brothers with a passion for quality and precision. We focus on durable plastic solutions that meet our customers' needs.",
    productsText: "Our products will be listed here soon.",
  },
  sv: {
    start: "Start",
    about: "Om oss",
    products: "Produkter",
    contact: "Kontakt",
    welcome: "Välkommen till RV-Form",
    intro: "Vi erbjuder högkvalitativa plastprodukter till bra priser.",
    aboutText: "RV-Form grundades av två bröder med passion för kvalitet och noggrannhet. Vi fokuserar på hållbara plastlösningar som möter våra kunders behov.",
    productsText: "Här kommer våra produkter att listas inom kort.",
  },
};

document.getElementById("language-select").addEventListener("change", function () {
  const lang = this.value;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
});
