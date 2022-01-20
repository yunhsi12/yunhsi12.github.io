function secSlideUp() {
      let allSections = $('body > section');
      let screenHeight = $(window).height();
      let scrollTop = $(window).scrollTop();
      allSections.each(function(index) {
            let section = allSections.eq(index);
            if(screenHeight + scrollTop - 50 > section.offset().top) {
                  section.animate({'top': 0, 'opacity': 1}, 500);
            }
      });
};
window.onload = function () {
      secSlideUp();
      $(window).on('scroll', secSlideUp);
};