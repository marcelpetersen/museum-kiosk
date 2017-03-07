/* global jQuery, lity */
(function ($) {
  var lightbox = null

  var lightboxContent = function (videoUrl) {
    return '<video autoplay controls onended="handleEnded()"><source src="' + videoUrl + '" type="video/mp4"></video>'
  }

  $('.video-link').on('click', function (evt) {
    evt.preventDefault()
    var link = $(evt.currentTarget)
    lightbox = lity(lightboxContent(link.attr('href')))
    return false
  })

  window.handleEnded = function () {
    lightbox.close()
  }
})(jQuery)
