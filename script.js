window.onload = function () {
  document.getElementById("loading").style.display = "none";
};

new TypeIt(".typing-effect", {
  strings: "",
  speed: 100,
  loop: true,
})
  .type("Hello, I'm Laura !", { delay: 100 })
  .delete(18, { delay: 800 })
  .type("私はローラです", { delay: 100 })
  .delete(7, { delay: 800 })
  .type("ᕦ(ò_óˇ)ᕤ", { delay: 100 })
  .delete(8, { delay: 800 })
  .go();
