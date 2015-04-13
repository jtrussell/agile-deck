angular.module('deck.directives', [])

.directive('deckFullHeightText', function($window) {
  return {
    link: function(scope, element, attrs) {
      var $win = angular.element($window);

      var onSizeChange = function() {
        element.css('line-height', 0.8 * $win[0].innerHeight + 'px');
      };

      onSizeChange();

      $win.bind('resize', function() {
        scope.$apply(onSizeChange);
      });
    }
  };
})
