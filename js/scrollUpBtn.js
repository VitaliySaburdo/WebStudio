// Отображение кнопки прокрутки вверх при прокрутке страницы
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
}

// Плавная прокрутка вверх при клике на кнопку
document.getElementById('scrollToTopBtn').addEventListener('click', function () {
  scrollToTop();
});

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
