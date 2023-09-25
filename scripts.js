var menuIcon = document.querySelector('.toggle-btn')
var sidebar = document.querySelector('.side-bar')
sidebar.classList.toggle('sider')
menuIcon.onclick= function(){
   sidebar.classList.toggle('sider')
    
}