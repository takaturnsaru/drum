//fade-in//
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.fadeIn').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight) {
        $(this).addClass("fadeInOn");
      }
    });
  });
});



window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const drumItems = document.querySelectorAll('.drum-item');
  console.log(audio);
  audio.classList.add('played');
  });


