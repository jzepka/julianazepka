var images = ["img/boilerroom/1.jpg", "img/come/2.jpg", "img/overview/img9.jpg", "img/les_coureurs.png", "img/ghost/img9.png", "img/rhein.png", "img/photos/photo3.jpg", "img/img17.jpg", "img/gardens/img15.png", "img/boilerroom/4.JPG", "img/photos/photo5.jpg",  "img/photos/photo1.jpg", "img/overview/img15.jpg", "img/ghost/home/7.png", "img/boilerroom/11.JPG", "img/img22.jpg"];

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 16);
  event.target.src = images[imgState];
});
