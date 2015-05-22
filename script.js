var img=document.getElementById("img");
img.style.top="200px"
  var     w  = window.innerWidth,
       direction=true,
       left  = -200;

var id=setInterval(function(){
  if (direction === true){
  if (left >= w - 200){
     direction=false;
     img.id="fliped";}
   img.style.left = left + 20 + "px";
   left += 20;}
   if (direction===false){
      if (left <= - 200){
       direction=true;
       img.id="";}
    img.style.left = left - 20 + "px";
    left -= 20;
    }
    }, 200);
