function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function drawPolygon(ctx, triangleScreenEdges) {
  for (let [[startX, startY], [endX, endY]] of triangleScreenEdges) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}

function example1(canvas, ctx) {
  const _3Gon = new ConvexRegularNGon(3, 45, 50, 300);
  const _4Gon = new ConvexRegularNGon(4, 45, 150, 300);
  const _5Gon = new ConvexRegularNGon(5, 45, 250, 300);
  const _6Gon = new ConvexRegularNGon(6, 45, 350, 300);
  const _7Gon = new ConvexRegularNGon(7, 45, 450, 300);
  const _8Gon = new ConvexRegularNGon(8, 45, 550, 300);

  (async function () {
    let angle = -(2 * Math.PI) / 360;
    while (true) {
      for (let i = 0; i < 360; i++) {
        ctx.fillStyle = "#E2E2E2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawPolygon(ctx, _3Gon.rotate(angle));
        drawPolygon(ctx, _4Gon.rotate(angle));
        drawPolygon(ctx, _5Gon.rotate(angle));
        drawPolygon(ctx, _6Gon.rotate(angle));
        drawPolygon(ctx, _7Gon.rotate(angle));
        drawPolygon(ctx, _8Gon.rotate(angle));

        await sleep(10);
      }
    }
  })();
}

function example2(canvas, ctx) {
  const _3Gon = new ConvexRegularNGon(3, 45, 50, 400);
  const _4Gon = new ConvexRegularNGon(4, 45, 150, 400);
  const _5Gon = new ConvexRegularNGon(5, 45, 250, 400);
  const _6Gon = new ConvexRegularNGon(6, 45, 350, 400);
  const _7Gon = new ConvexRegularNGon(7, 45, 450, 400);
  const _8Gon = new ConvexRegularNGon(8, 45, 550, 400);

  (async function () {
    let angle = -(2 * Math.PI) / 360;

    while (true) {
      for (let i = 0; i < 360; i++) {
        ctx.fillStyle = "#E2E2E2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let t = 0.5;

        _3Gon.translate(0, t);
        drawPolygon(ctx, _3Gon.rotate(angle));
        t *= 0.6;

        _4Gon.translate(0, t);
        drawPolygon(ctx, _4Gon.rotate(angle));
        t *= 0.7;

        _5Gon.translate(0, t);
        drawPolygon(ctx, _5Gon.rotate(angle));
        t *= 0.7;

        _6Gon.translate(0, t);
        drawPolygon(ctx, _6Gon.rotate(angle));
        t *= 0.7;

        _7Gon.translate(0, t);
        drawPolygon(ctx, _7Gon.rotate(angle));
        t *= 0.7;

        _8Gon.translate(0, t);
        drawPolygon(ctx, _8Gon.rotate(angle));

        await sleep(10);
      }
    }
  })();
}

function example3(canvas, ctx) {
  const _3Gon = new ConvexRegularNGon(3, 45, 50, 400);
  const _4Gon = new ConvexRegularNGon(4, 45, 150, 400);
  const _5Gon = new ConvexRegularNGon(5, 45, 250, 400);
  const _6Gon = new ConvexRegularNGon(6, 45, 350, 400);
  const _7Gon = new ConvexRegularNGon(7, 45, 450, 400);
  const _8Gon = new ConvexRegularNGon(8, 45, 550, 400);

  (async function () {
    let angle = -(2 * Math.PI) / 360;

    while (true) {
      for (let i = 0; i < 360; i++) {
        ctx.fillStyle = "#E2E2E2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let t = 0.5;
        let scale = 0.998;

        _3Gon.translate(0, t);
        _3Gon.scale(scale);
        drawPolygon(ctx, _3Gon.rotate(angle));
        t *= 0.6;

        _4Gon.translate(0, t);
        _4Gon.scale(scale);
        drawPolygon(ctx, _4Gon.rotate(angle));
        t *= 0.7;

        _5Gon.translate(0, t);
        _5Gon.scale(scale);
        drawPolygon(ctx, _5Gon.rotate(angle));
        t *= 0.7;

        _6Gon.translate(0, t);
        _6Gon.scale(scale);
        drawPolygon(ctx, _6Gon.rotate(angle));
        t *= 0.7;

        _7Gon.translate(0, t);
        _7Gon.scale(scale);
        drawPolygon(ctx, _7Gon.rotate(angle));
        t *= 0.7;

        _8Gon.translate(0, t);
        _8Gon.scale(scale);
        drawPolygon(ctx, _8Gon.rotate(angle));

        await sleep(10);
      }
    }
  })();
}

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("main-canvas");
  const ctx = canvas.getContext("2d");

  example1(canvas, ctx);
});
