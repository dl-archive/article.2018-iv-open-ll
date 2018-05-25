
let label = new Spline3DLabel();
label.position = { x: 0.0, y: 0.0, z: 0.0};

controlPoints = [
    { x: -1, y: 0 z: 1}, { x: -1, y: 0 z: 0},
    { x: -1, y: 0 z: 0}, { x: -1, y: 0 z: 1} ];
controlPoints2 = [
    { x: -1, y: 1 z: 1}, { x: -1, y: 1 z: 0},
    { x: -1, y: 1 z: 0}, { x: -1, y: 1 z: 1} ];
knotValues = [ 0.f, 0.f, 0.f,
    1.f, 2.f, 3.f, 3.f, 3.f ];
degree = 3;

label.baseSpline = new Spline3D(
    controlPoints, degree, knotValues);
label.topSpline = new Spline3D(
    controlPoints2, degree, knotValues);

label.additionalTransform = matrix;
 