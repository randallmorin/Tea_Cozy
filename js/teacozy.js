//smooth scrolling
openNav();
handleCloseNav();

$(document).ready(function() {
  $('a').on('click', function(event) {
    closeNav();
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200);
    }
  });
});




//opening navigation
function openNav() {
  let nav = document.querySelector('.side-nav');
  let underlay = document.querySelector('.underlay');
  let navIcon = document.querySelector('.fa-bars');

  navIcon.onclick = function() {
    //show navigation
    nav.style.width = "15rem";
    nav.style.transition = "width 200ms ease-out";

    //change background color of underlay
    setTimeout(function() {
      underlay.style.width = "100%";
      underlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
    }, 200);
  }
}

//function for closing navigation
function closeNav() {
  let nav = document.querySelector('.side-nav');
  let underlay = document.querySelector('.underlay');

  nav.style.width = "0%";
  nav.style.transition = "width 200ms ease-out";

  //reverse background color change
  setTimeout(function() {
    underlay.style.width = '0%';
    underlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }, 200);
}

//handle the actual closing of navigation
function handleCloseNav() {
  let closeButton = document.querySelector('#close');

  closeButton.onclick = function () {
    closeNav();
  }
}














//
