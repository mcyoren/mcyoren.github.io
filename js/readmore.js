function readmore() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("btn");

   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
   } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
   }
}
function readmore_pub() {
   var dots = document.getElementById("dots_pub");
   var moreText = document.getElementById("more_pub");
   var btnText = document.getElementById("btn_pub");

   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "more publications";
      moreText.style.display = "none";
   } else {
      dots.style.display = "none";
      btnText.innerHTML = "less publications";
      moreText.style.display = "inline";
   }
}