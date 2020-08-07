const links = document.querySelectorAll(
  "header a .down-arrow, .header-content a"
);

$(links).on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});
