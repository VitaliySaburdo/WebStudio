window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
}

document.getElementById('scrollToTopBtn').addEventListener('click', function () {
  scrollToTop();
});

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
