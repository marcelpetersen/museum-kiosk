/* global $, lity */

(function($) {
  var lightboxContent = function (videoSrc) {
    return
  }

  var lightbox = null

  $('.video-link').on('click', function (evt) {
    evt.preventDefault()
    var link = $(evt.currentTarget)
    lightbox = lity(`<video src="${link.attr('href')}" autoplay controls />`)
    return false
  })

  $(document).on('ended', function(evt) {
    console.log('video ended!')
    lightbox.close()
  })
})(jQuery)
