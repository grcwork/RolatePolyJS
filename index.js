function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("main-canvas");
  const ctx = canvas.getContext("2d");

  const triangle = new ConvexRegularNGon(4, 80, 300, 300);

  (async function () {
    let angle = -(2 * Math.PI) / 360;
    while (true) {
      for (let i = 0; i < 360; i++) {
        ctx.fillStyle = "#E2E2E2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        triangle.rotate(angle);
        triangle.scale(0.995);
        let triangleScreenEdges = triangle.translate(1, 1);

        for (let [[startX, startY], [endX, endY]] of triangleScreenEdges) {
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }

        await sleep(10);
      }
    }
  })();
});
