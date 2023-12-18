document.querySelector("#submit").onclick = function(){
  var block1 = document.getElementById('middle-part');
  block1.innerHTML = block1.innerHTML + "<div style = 'top:" + t + "px; z-index:" + cc + "; '> <img width ='" + (w*100) +"' src='img/Down_tree(5).png' alt='Дерево'> </div>";
  w += .3;
   t = t - ((-cc)*7);
   cc--;
}