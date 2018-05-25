
let box = new BoxProxy();
box.extents = {
    widthSpan: { x: 2.0, y: 0.0, z: 0.0 },
    heightSpan: { x: 0.0, y: 0.8, z: 0.0 },
    depthSpan: { x: 0.0, y: 0.0, z: 0.5 },
};
box.position = { x: 0.0, y: 0.0, z: 0.0 };

let label = new Position3DLabel();
label.fontSize = 0.125;
label.position = box.upperSurface;
 