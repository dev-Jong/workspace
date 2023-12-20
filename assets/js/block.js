$(window).on('load', function(){
  const preLoadImgSrc = [
    "../assets/images/block0.svg",
    "../assets/images/block1.svg",
    "../assets/images/block2.svg",
    "../assets/images/block3.svg",
    "../assets/images/block4.svg",
    "../assets/images/block5.svg",
    "../assets/images/block6.svg",
    "../assets/images/block7.svg",
    "../assets/images/block8.svg",
    "../assets/images/block9.svg",
    "../assets/images/block10.svg",
    "../assets/images/block11.svg",
    "../assets/images/block12.svg",
    "../assets/images/block13.svg",
    "../assets/images/block14.svg",
    "../assets/images/block15.svg",
    "../assets/images/block16.svg",
    "../assets/images/block17.svg",
    "../assets/images/block18.svg",
    "../assets/images/block19.svg",
    "../assets/images/block20.svg",
    "../assets/images/block21.svg",
    "../assets/images/block22.svg",
    "../assets/images/block23.svg",
  ];

  const preLoadImg = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  preLoadImg(preLoadImgSrc);

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
  
  // image.onload = function(){
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
  // }
});