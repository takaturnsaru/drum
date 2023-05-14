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
  // 押したボタンのkeyと関連されたaudioタグを取得できる
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const drumItem = document.querySelector(`.drum-item[data-key="${e.key}"]`);
  const keys = document.querySelectorAll('.drum-item');
  // 関連したタグがなかった場合処理を終了する設定
  if(!audio){
    return;
  }
  // ボタンを押した時にスタートを０にする設定これをやらないと再生が終わるまで再生されない。
  audio.currentTime = 0;
  audio.play();
  drumItem.classList.add('played');

  keys.forEach(key => {
    key.addEventListener('transitionend', () => {
      key.classList.remove('played');
    });
  });
});
