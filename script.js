// Responsive menu

function menuRes(x) {
  x.classList.toggle("change");
  let element = document.getElementById("menu-links");
  element.classList.toggle("open-close-menu");
}

// thumbnail

function thumbnailOne(x) {
  x.classList.toggle("thumbnail");
  document.getElementsByClassName("works-items")[0];
  let img = document.getElementsByClassName("works-img")[0];
  img.classList.toggle("img-big");
  let title = document.getElementsByClassName("works-title")[0];
  title.classList.toggle("title-big");
}

function thumbnailTwo(x) {
  x.classList.toggle("thumbnail");
  document.getElementsByClassName("works-items")[1];
  let img = document.getElementsByClassName("works-img")[1];
  img.classList.toggle("img-big");
  let title = document.getElementsByClassName("works-title")[1];
  title.classList.toggle("title-big");
}

function thumbnailTree(x) {
  x.classList.toggle("thumbnail");
  document.getElementsByClassName("works-items")[2];
  let img = document.getElementsByClassName("works-img")[2];
  img.classList.toggle("img-big");
  let title = document.getElementsByClassName("works-title")[2];
  title.classList.toggle("title-big");
}