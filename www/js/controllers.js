angular.module('deck.controllers', [])

.controller('AppCtrl', function($scope) {
  var decks = $scope.decks = {
    goat: {
      name: 'Mountain Goat Deck',
      cards: ['?', 0, '1/2', 1, 2, 3, 5, 8, 13, 20, 40, 100, '&infin;']
    }
  };

  $scope.card = "&rarr;"

  $scope.chooseCard = function(card) {
    $scope.card = card;
  };

  useDeck = function(deckId) {
    $scope.deck = decks[deckId];
  };

  useDeck('goat');
})

.controller('CardsCtrl', function() {
  // ...
})
