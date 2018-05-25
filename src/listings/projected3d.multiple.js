
let cloud = new LabelCloud();
cloud.texts = ['label1', 'label2',
                ..., 'labelN'];

cloud.positions = [
    { x: -0.0134, y: 0.0911, z: -0.2184 },
    { x: -0.0267, y: 0.0526, z: -0.3926 }, ...
    { x: -0.0589, y: 0.0139, z: -0.9424 } ];

cloud.weights = [ 0.2, 0.3, ... 0.1 ];
cloud.direction = { x: 0.0, y: 1.0 };
cloud.algorithm = 'SimulatedAnnealing';
cloud.alignment = 'left';

cloud.constraints.add({
    type: 'GlobalMaxLabels',
	value: 30 });
cloud.constraints.add({
    type: 'GroupMaxLabels',
	value: 10,
	criterion: weight > 0.1 });
renderer.draw(cloud);
 