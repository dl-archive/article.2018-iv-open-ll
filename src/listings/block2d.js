
let label = new Rectangle2DLabel();

label.fontSize = { value: 12, unit: 'pt' };
label.rectangle = { x: 0, y: 0,
    width: 512, height:128, unit: 'px' };
label.wordWrap = true;
label.padding = { bottom: 8, left: 8,
    top: 8, right: 8, unit: 'px' };
label.lineHeight = { value: 16, unit: 'pt' };
label.overflow = { action: 'hidden',
    per: 'line' };
 