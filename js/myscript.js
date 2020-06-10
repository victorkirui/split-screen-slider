document.addEventListener('DOMContentLoaded',function(){
  let container = document.getElementById('container');
  let top = container.querySelector('.top');
  let split = container.querySelector('.split');
  let skew = 0;
  let delta = 0;

  if(container.className.indexOf('skew') != -1){
    skew = 1000;
  }
  container.addEventListener('mousemove',(e) => {
    
    delta = (e.clientX - window.innerWidth / 2) * 0.5 ;

    split.style.left = e.clientX + delta + 'px' ;

    top.style.width = skew + e.clientX + delta + 'px';

  })
})