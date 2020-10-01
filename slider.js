var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


// var slideIndex = 1;
//   showDivs(slideIndex);

  
//   function changeImage(){
//     if (slideIndex===1){
//       slideIndex+=1;
//       showDivs(-1);

//     }
//     else{
//       slideIndex=1;
//       showDivs(1);
//     }
//     setTimeout(changeImage,4000);
//   }
//   function plusDivs(n) {
//       showDivs(slideIndex += n);
//   }

//   function showDivs(n) {
//       var i;
//       var x;
//       x = document.getElementsByClassName("mySlides");
//       if (n > x.length) {slideIndex = 1}
//       if (n < 1) {slideIndex = x.length} ;
//       for (i = 0; i < x.length; i++) {
//        // console.log(slideIndex-1,x,x[0]);
//         x[i].style.display = "none";
//       }
//      // console.log(slideIndex-1,x,x[0]);
//       x[slideIndex-1].style.display = "block";
//   }
//   //setInterval("changeImage()", 2000);
//   setTimeout(changeImage,4000);