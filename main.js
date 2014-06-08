(function($) {
  function addButton(name, href, color) {
    var container = $("#social");
    var inactiveColor = "#606060";
    var whiteImage = "url(icons/" + name + ".png)";
    var image = $("<div>")
      .addClass("socialicon")
      .css("background-image", whiteImage)
      .css("background-color", inactiveColor);
    var button = $("<a>")
      .attr("href", href)
      .attr("target", "_blank")
      .attr("title", name)
      .append(image);
    image.hover(
      function() {
        $(this).css("background-color", color);
      },
      function() {
        $(this).css("background-color", inactiveColor);
      }
    );
    container.append(button);
  }

  $(document).ready(function() {
    addButton("gmail", "mailto:artem@volkhin.com", "#DD4B39");
    addButton("linkedin", "http://www.linkedin.com/in/volkhin", "#007FB1");
    addButton("vk", "https://vk.com/avolkhin", "#45668E");
    addButton("facebook", "https://facebook.com/avv", "#3B5998");
    addButton("github", "http://github.com/volkhin", "#4183C4");
    addButton("twitter", "http://twitter.com/volkhin/", "#00ACED");
    addButton("stackoverflow", "http://stackoverflow.com/users/659325/artem-volkhin", "#F47920");
    addButton("skype", "skype:avolkhin?call", "#00AFF0");
  });
})($);
