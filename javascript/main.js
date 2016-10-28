//Pixi.js Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
//Cloud game code
var canvas;
var stage;
var renderer;


//This `setup` function will run when the image has loaded
function setup() {

  //Create the `cat` sprite from the texture
  var cat = new PIXI.Sprite(
    PIXI.loader.resources["assets/cloudFilled.png"].texture
  );

  //Add the cat to the stage
  stage.addChild(cat);

  //Render the stage   
  renderer.render(stage);
}



$(document).ready(function() {
    console.log("test");
  canvas = document.getElementById("cloudCanvas");
  
  canvas.width = $("#headerParent").width();
  canvas.height = $("#headerParent").height();
  stage = new PIXI.Container();
  renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, {view: canvas});
  renderer.backgroundColor = 0x4286f4;
  renderer.view.style.position = "absolute";
  renderer.view.style.display = "block";

//Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add("assets/cloudFilled.png")
  .load(setup);
  

  //Cloud game code
  /*{
      var renderer = autoDetectRenderer(canvas.width, canvas.height, {view: canvas, transparent: false});
      renderer.view.style.position = "absolute";
      //renderer.view.style.display = "block";
      var stage = new PIXI.Container();
      renderer.backgroundColor = 0x4286f4;
      //renderer.view = canvas;
      //document.body.appendChild(renderer.view);
      //Create a container object called the `stage`
      loader.add([
          "assets/cloudFilled.png",
          "assets/cloudOutline.png"
          ]).load(cloudGameSetup(stage, renderer));
          //var clouds = [PIXI.utils.TextureCache["./assets/cloudFilled.png"],
          //PIXI.utils.TextureCache["./assets/cloudOutline.png"]
          //];
    
  }*/
  //cloudGameSetup();
  //var ctx = canvas.getContext('2d');
    //var img = new Image();
    /*for (i = 0; i > 5; i++)
    {
        settings = {};
    //    img.onload = function() {
    //    ctx.drawImage(img, 20*i, 20*i);
    //}
    //settings.imageObj = new Image();
    settings.imageObj.onload = function(args)
    {
        ctx.drawImage(settings.img, 20*i, 20*i);
    };
    imageObj.src = "./assets/ic_cloud_black_24px.svg";
    }
    
    //img.onload = function() {
    //    ctx.drawImage(img, 20, 20);
    //}
    //img.src = "./assets/ic_cloud_black_24px.svg";*/
    
});
$(window).resize(function() {
    var canvas = document.getElementById("cloudCanvas");
    canvas.width = $("#headerParent").width();
    canvas.height = $("#headerParent").height();
});
//var cloudCanvas = document.getElementById("cloudCanvas");
/*function cloudGameSetup(stage, renderer) {
    var cat = new Sprite(resources["assets/cloudFilled.png"].texture);  
    stage.addChild(cat);
    renderer.render(stage);
    console.log (cat);
    console.log(renderer);
    //Tell the `renderer` to `render` the `stage`
    //renderer.render(stage);
}
//Cloud intro game*/