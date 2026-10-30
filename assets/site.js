(function(){
  var b=document.getElementById('menu-btn'),m=document.getElementById('menu');
  if(b&&m){
    b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open')})});
  }
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
})();
