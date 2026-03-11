const modalBox = document.querySelector('.modal-box');
const modalBg = modalBox.querySelector('.modal-bg');
const modalCloseBtn = modalBox.querySelector('.close');
// const triggerTarget = document.querySelector('.modal-trigger-target');

let hasShownModal = false; // ★表示済みかどうかのフラグ

function openGeneralModal() {
  if (!hasShownModal) {
    modalBox.classList.add('show');
    hasShownModal = true; // ★1回表示したらフラグをON
    document.body.style.overflow = "hidden";
  }
}

function closeGeneralModal() {
  modalBox.classList.remove('show');
  document.body.style.overflow = "";
}


// スクロール発火位置
const triggerScroll = 200;

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;

  if (scrollY > triggerScroll && !hasShownModal) {
    openGeneralModal();
  }

});

// 閉じる処理（背景クリックや×ボタン）
modalBg.addEventListener('click', closeGeneralModal);
modalCloseBtn.addEventListener('click', closeGeneralModal);

