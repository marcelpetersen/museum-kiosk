/* global jQuery, lity */

(function ($) {
  var lightbox = null

  $('.video-link').on('click', function (evt) {
    evt.preventDefault()
    var link = $(evt.currentTarget)
    lightbox = lity(`
      <video autoplay controls onended="handleEnded()">
        <source src="${link.attr('href')}" type="video/mp4">
      </video>
    `) //
    return false
  })

  window.handleEnded = function () {
    console.log('video ended!')
    lightbox.close()
  }
})(jQuery)
