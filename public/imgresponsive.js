'use strict';

(function (window, document, undefined) {

  var images = $('img.imgresponsive');
  var resolutions = {
    lg: 1200,
    md: 768,
    sm: 320
  };
  var screenResolution;

  if (screen.width >= resolutions['lg'])
    screenResolution = 'lg';
  else if (screen.width >= resolutions['md'])
    screenResolution = 'md';
  else
    screenResolution = 'sm';

  images.each(function (idx) {
    var elem = $(this);
    var src = elem.data('img-' + screenResolution);

    elem.attr('src', src);
  });

})(window, document);
