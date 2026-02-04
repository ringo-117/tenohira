// JavaScript Document
// =============================
// ハンバーガーメニューとスクロール制御
// =============================
// console.log('common.js 読み込まれています');
// const hamburger = document.querySelector('.hamburger');
// if (hamburger) {
//   const container = document.querySelector('.container');
//   const header   = document.querySelector('.header');

//   hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     container?.classList.toggle('active');
//     header?.classList.toggle('active');

//     const bodyStyle = document.body.style;
//     if (bodyStyle.overflow === 'hidden') {
//       bodyStyle.overflow = '';
//       bodyStyle.height   = '';
//     } else {
//       bodyStyle.overflow = 'hidden';
//       bodyStyle.height   = '100%';
//     }
//   });
// }


document.addEventListener('click', (e) => {
  const hamburger = e.target.closest('.hamburger');
  if (!hamburger) return;

  const nav = hamburger.closest('.site-nav--sp');
  const container = nav.querySelector('.container');

  const isOpen = hamburger.classList.toggle('active');
  container.classList.toggle('active');

  document.body.classList.toggle('is-menu-open', isOpen);
});


