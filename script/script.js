const swiper = new Swiper('.swiper-container', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});
/*Выпадающий список*/
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.select').forEach(function (selectBtn) {
    selectBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.item;
      const currOption = document.querySelector(`[data-dropdown="${path}"]`);//текущий выбор
      if (currOption.classList.contains('active')) {
        currOption.classList.remove('active');
      }//если установлен актив, то просто снимаем
      else {
        document.querySelectorAll('.option').forEach(function (dropdown) {
          dropdown.classList.remove('active');//снимаем актив у всех
          currOption.classList.add('active');//добавляем актив к текущему выбору
        })
      }
    })
  })
})