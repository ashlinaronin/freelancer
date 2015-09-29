freelancer.directive("showOverlay", function() {
  return function (scope, element, attrs) {
      element.bind("mouseover", function() {
        // element.css("color", "red");
        var child = element.children(".showcase-overlay");
        child.toggleClass("show");

      });
  };
});
