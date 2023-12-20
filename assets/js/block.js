$(window).on('load', function(){
  const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

  let width = 1400;
  let height = 800;
  let rectWidth = 150;
  let circleWidth = 80;

  const canvasBox = document.querySelector('.play-box');
  
  const engine = Engine.create();
  const { world } = engine;
  const render = Render.create({
    element: canvasBox,
    engine: engine,
    options: {
      wireframes: false,
      background: 'none',
      width,
      height,
    }
  });
  
  Render.run(render);
  Runner.run(Runner.create(), engine); 
  
  World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
  }));
  
  // walls
  const walls = [
    Bodies.rectangle(width/2, -height, width, 10, { isStatic: true, render: {fillStyle: 'rgba(0,0,0,0.2)'}}),
    Bodies.rectangle(width/2, height, width, 10, {isStatic: true, render: {fillStyle: 'rgba(0,0,0,0.2)'}}),
    Bodies.rectangle(0, height/6, 10, height*2, {isStatic: true, render: {fillStyle: 'rgba(0,0,0,0.2)'}}),
    Bodies.rectangle(width, height/6, 10, height*2, { isStatic: true, render: {fillStyle: 'rgba(0,0,0,0.2)'}})
  ];
  World.add(world, walls);
  
  // Random Shapes
  
  for (let i = 0; i < 24; i++) {
    if (i < 14) {
      World.add(
        world, 
        Bodies.rectangle(Math.random() * width, -Math.random() * height, rectWidth, rectWidth, {isStatic: false, angle:Math.random()*i, render: { sprite: { texture: '../assets/images/block'+i+'.svg'}}}));
    } else {
      World.add(
        world,
        Bodies.circle(Math.random() * width, -Math.random() * height, circleWidth, {isStatic: false, angle:Math.random()*i, render: { sprite: { texture: '../assets/images/block'+i+'.svg'}}})
      );
    }
  }
});