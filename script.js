var menuIcon = document.querySelector('.toggle-btn')
var sidebar = document.querySelector('.side-bar')

var filter = document.querySelector('.filters')

var continer = document.querySelector('.container')

menuIcon.onclick= function(){
    sidebar.classList.toggle('small-sidebar')
    filter.classList.toggle('large-filter')
    continer.classList.toggle('large-container')

}


// for filter animation

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "60px";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



