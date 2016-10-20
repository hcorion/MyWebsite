$(document).ready(function() {
  var canvas = document.getElementById("cloudCanvas");
  canvas.width = $("#headerParent").width();
  canvas.height = $("#headerParent").height();
  var settings;
  var ctx = canvas.getContext('2d');
    var img = new Image();
    for (i = 0; i > 5; i++)
    {
        settings = {};
    //    img.onload = function() {
    //    ctx.drawImage(img, 20*i, 20*i);
    //}
    settings.imageObj = new Image();
    settings.imageObj.onload = function(args)
    {
        ctx.drawImage(settings.img, 20*i, 20*i);
    };
    imageObj.src = "./assets/ic_cloud_black_24px.svg";
    }
    //img.onload = function() {
    //    ctx.drawImage(img, 20, 20);
    //}
    //img.src = "./assets/ic_cloud_black_24px.svg";
});
//var cloudCanvas = document.getElementById("cloudCanvas");
