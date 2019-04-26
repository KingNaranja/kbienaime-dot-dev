'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    dots: '#dots',
    scrollLock: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }

  })

})
