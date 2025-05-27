$(document).ready(function () {
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  // Change hyperlink colors on events
  $("a").on({
    click: function () {
      $(this).css("color", "red");
    },
    mousedown: function () {
      $(this).css("color", "green");
    },
    mouseleave: function () {
      $(this).css("color", "#4caf50");
    },
  });
});