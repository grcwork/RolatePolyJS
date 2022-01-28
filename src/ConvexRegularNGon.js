class ConvexRegularNGon {
  constructor(_edges, _radius, _screenX, _screenY) {
    this.edges = _edges;
    this.radius = _radius;
    this.exteriorAngle = (2 * Math.PI) / this.edges;
    this.points = [];
    this.screenX = _screenX;
    this.screenY = _screenY;
    this.screenPoints = [];
    this.screenEdges = [];
    this.#calculatePoints();
    this.#calculateScreenPoints();
  }

  #calculatePoints() {
    this.points.push([0, this.radius]);
    for (let i = 0; i < this.edges - 1; i++) {
      let [previousPointX, previousPointY] =
        this.points[this.points.length - 1];

      let nextPointX =
        previousPointX * Math.cos(this.exteriorAngle) -
        previousPointY * Math.sin(this.exteriorAngle);

      let nextPointY =
        previousPointX * Math.sin(this.exteriorAngle) +
        previousPointY * Math.cos(this.exteriorAngle);

      this.points.push([nextPointX, nextPointY]);
      previousPointX = nextPointX;
      previousPointY = nextPointY;
    }
  }

  #calculateScreenPoints() {
    this.screenPoints = [];
    for (let [x, y] of this.points) {
      this.screenPoints.push([x + this.screenX, -y + this.screenY]);
    }
  }

  #calculateScreenEdges() {
    this.screenEdges = [];
    for (let i = 0; i < this.screenPoints.length; i++) {
      if (i === this.screenPoints.length - 1) {
        this.screenEdges.push([this.screenPoints[i], this.screenPoints[0]]);
      } else {
        this.screenEdges.push([this.screenPoints[i], this.screenPoints[i + 1]]);
      }
    }
  }

  rotate(angle) {
    let newPoints = [];
    for (let [x, y] of this.points) {
      let newPointX = x * Math.cos(angle) - y * Math.sin(angle);
      let newPointY = x * Math.sin(angle) + y * Math.cos(angle);
      newPoints.push([newPointX, newPointY]);
    }
    this.points = newPoints;

    this.#calculateScreenPoints();
    this.#calculateScreenEdges();
    return this.screenEdges;
  }

  translate(vectorX, vectorY) {
    this.screenX = vectorX + this.screenX;
    this.screenY = -vectorY + this.screenY;

    this.#calculateScreenPoints();
    this.#calculateScreenEdges();
    return this.screenEdges;
  }

  scale(alpha) {
    let newPoints = [];
    for (let [x, y] of this.points) {
      let newPointX = x * alpha;
      let newPointY = y * alpha;
      newPoints.push([newPointX, newPointY]);
    }
    this.points = newPoints;

    this.#calculateScreenPoints();
    this.#calculateScreenEdges();
    return this.screenEdges;
  }
}
