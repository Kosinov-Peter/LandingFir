document.querySelector("#submit").onclick = function(){
  var block1 = document.getElementById('middle-part');
  block1.innerHTML = block1.innerHTML + "<div style =' left: 50%; transform: translate(-50%, -50%);top:" + t + "px; z-index:" + cc + "; '> <img width ='" + (w*100) +"' src='img/Down_tree(5).png' alt='Дерево'> </div>";
  w += 1;
   t = t - ((-cc)*15) + cc;
   cc--;
}