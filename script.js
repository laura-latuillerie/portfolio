window.onload = function () {
  document.getElementById("loading").style.display = "none";
};

new TypeIt(".typing-effect", {
  strings: "",
  speed: 80,
  waitUntilVisible: true,
}).go();
