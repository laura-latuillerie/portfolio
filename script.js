new TypeIt("#typing-demo", {
  strings: "The Magician",
  speed: 75,
  loop: true,
}).go();

$(function () {
  $(".chart").easyPieChart({
    size: 50,
    barColor: "darkred",
    scaleLength: 0,
    lineWidth: 5,
    trackColor: "#eeeeee",
    lineCap: "circle",
    animate: 3000,
  });
});
