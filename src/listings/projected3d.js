
let label = new Projected3DLabel();
label.fontSize  = { value: 12, unit: 'pt' };
label.position = { x: -0.05, y: 0.02, z: -0.3 };
label.direction = { x:  0.0,  y: 1.0 };

let renderer = new GlyphRenderer();
renderer.modelViewProjection = mvp;
renderer.draw(label);
 