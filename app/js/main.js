$(function(){
    //tabs
    $('.statistiky__active .statistiky__tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.statistiky__active').find('.statistiky__content').removeClass('tab-active').hide();
      $('.statistiky__active .statistiky__tabs').find('.statistiky__tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
  
  $('select, .shop__check').styler();
  //presmerovani pomoci selectu
    // tabs team
  $('.aside__tabbox .aside__tab').on('click', function (event) {
   var id = $(this).attr('data-id');
   $('.aside__tabbox').find('.aside__tab-content').removeClass('tab-active').hide();
   $('.aside__tabbox .aside__tabs').find('.aside__tab').removeClass('link');
   $(this).addClass('link');
   $('#' + id)
     .addClass('tab-active')
     .fadeIn();
   return false;
 });

 $('.infoblock__wrapper .tabulka__tab').on('click', function (event) {
   var id = $(this).attr('data-id');
   $('.infoblock__wrapper').find('.infoblock__tabulka-content').removeClass('tab-active').hide();
   $('.infoblock__wrapper .infoblock__header').find('.tabulka__tab').removeClass('active');
   $(this).addClass('active');
   $('#' + id)
     .addClass('tab-active')
     .fadeIn();
   return false;
 });

 $('.infoblock__wrapper .statistiky__tab').on('click', function (event) {
   var id = $(this).attr('data-id');
   $('.infoblock__wrapper').find('.infoblock__statistiky-content').removeClass('tab-active').hide();
   $('.infoblock__wrapper .infoblock__header').find('.statistiky__tab').removeClass('active');
   $(this).addClass('active');
   $('#' + id)
     .addClass('tab-active')
     .fadeIn();
   return false;
 });
 $('.navbar__menu').on('click', function () {
   $('.navigation__menu').slideToggle();
 });
 $('.navigation__item').on('click', function () {
   $(this).closest('.navigation__list').toggleClass('active');
 });
});
//// scroll
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header__inner');
  header.classList.toggle('sticky', window.scrollY > 105);
});
const menuBtn = document.querySelector('.navbar__menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    })
  })

}

counter();