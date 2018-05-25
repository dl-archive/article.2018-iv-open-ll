
const fontFace = FontFace.fromFile(
    'opensans.regular.fnt');

let label = new Position2DLabel({
    text: 'Hello Word!',
    fontFace: fontFace,
    fontSize: { value: 12.0, unit: 'pt' },
    alignment: 'left',
    position: { x: 32, y: 8, unit: 'px' },
    direction: { x: 0.0, y: 1.0} });
label.lineAnchor = 'baseline';

var renderer = new GlyphRenderer();
renderer.superSampling = 'rgss';
renderer.draw(label);
 