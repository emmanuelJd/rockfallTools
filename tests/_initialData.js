var quickVisuPlate = [
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 2],
  [1, 2, 0, 0, 0],
  [1, 2, 2, 0, 1],
  [1, 2, 2, 2, 0],
];

var Plate = [
  [{"x":0, "y":0, "user":1}, 0, 0, 0, 0],
  [{"x":0, "y":1, "user":1}, {"x":1, "y":1, "user":1}, {"x":2, "y":1, "user":1}, {"x":3, "y":1, "user":1}, {"x":4, "y":1, "user":2}],
  [{"x":0, "y":2, "user":1}, {"x":1, "y":2, "user":2}, 0, 0, 0],
  [{"x":0, "y":3, "user":1}, {"x":1, "y":3, "user":2}, {"x":2, "y":3, "user":2}, 0, {"x":4, "y":3, "user":1}],
  [{"x":0, "y":4, "user":1}, {"x":1, "y":4, "user":2}, {"x":2, "y":4, "user":2}, {"x":3, "y":4, "user":2}, 0],
];

module.exports = {
  Plate:Plate,
  PlateVisu:quickVisuPlate
}
