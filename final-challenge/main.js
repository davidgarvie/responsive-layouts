(function(document) {
  document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('nav-icon');
    const nav = document.querySelector('.nav__links');

    if (icon) {
      icon.addEventListener('click', function() {
        icon.classList.toggle('open')
        nav.classList.toggle('open')
      });
    }
  });
})(document);
