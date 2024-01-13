function toggleMenu() {
 const menu = document.querySelector(".menu-links");
 const icon = document.querySelector(".hamburger-icon");
 menu.classList.toggle("open");
 icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', start() )

//  function start(){
//document.getElementById("clickableImage").addEventListener('click', function() {
//   const img = document.querySelector(".profilePic");

//   // Toggle the clickedPic class on the image
//   img.classList.toggle("clickedPic");

//   // Toggle the body-blur and exclude-blur classes on the body and image
//   if (!document.body.classList.contains("body-blur")) {
//     document.body.classList.add("body-blur");
//     img.classList.add("exclude-blur");
//   } else {
//     document.body.classList.remove("body-blur");
//     img.classList.remove("exclude-blur");
//   }
// })}}
;