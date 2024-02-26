var images = ["img/overview/img15.jpg", "img/img17.jpg", "img/boilerroom/4.JPG", "img/come/2.jpg", "img/photos/photo3.jpg", "img/boilerroom/11.JPG", "img/les_coureurs.png", "img/boilerroom/1.jpg", "img/photos/photo1.jpg", "img/gardens/img15.png", "img/img22.jpg", "img/rhein.png", "img/photos/photo4.jpg", "img/overview/img9.jpg",
"img/ghost/home/7.png", "img/ghost/img9.png", "img/photos/photo5.jpg"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 17);
  event.target.src = images[imgState];
});