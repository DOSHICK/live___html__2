$(document).ready(function () {

  $('.slider').slick({
    draggable: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  $('.slide').on('click', function () {
    /* $(this).toggleClass('locked'); */

    /* Проверка на наличие уже заблокированного слайда */
    function isLocked() {
      let locked = document.querySelectorAll('.slide.locked')
      if (locked.length < 1) {
        return false
      } else {
        return true
      }
    }

    /* Возможность отвязать блок при повторном нажатии и блокировка при нажатии на другой блок*/
    if (isLocked() === true) {
      if (this.classList.contains('locked')) {
        $(this).toggleClass('locked');
      }
    } else {
      $(this).toggleClass('locked');
    }

  });
  let slicknextBtn = document.querySelector('.slick-next')
  $('.slick-next').on('click', function () {
    let LockedSlideExists = document.querySelector('.slide.locked')
    if (LockedSlideExists === null) {
      console.log('hola')
    } else {
      console.log(LockedSlideExists);
      let currentDataSlickIndex = LockedSlideExists.getAttribute("data-slick-index");
      let nextSlide = $(`.slide[data-slick-index=${Number(currentDataSlickIndex) + 1}]`)[0]
      console.log(nextSlide)
      let sliderParent = document.querySelector('.slick-track')
      sliderParent.insertBefore(nextSlide, LockedSlideExists)
    }
  })

  slicknextBtn.onclick = function () {
    let LockedSlideExists = document.querySelector('.slide.locked')
    if (LockedSlideExists === null) {
      console.log('hola')
    } else {
      let currentDataSlickIndex = LockedSlideExists.getAttribute("data-slick-index");
      LockedSlideExists.setAttribute("data-slick-index" ,Number(currentDataSlickIndex) +1 )
      let nextSlide = $(`.slide[data-slick-index=${Number(currentDataSlickIndex) + 1}]`)[0]
      let sliderParent = document.querySelector('.slick-track')
      sliderParent.insertBefore(nextSlide, LockedSlideExists)
      nextSlide.setAttribute("data-slick-index" ,Number(currentDataSlickIndex) )
    }
  }
});
