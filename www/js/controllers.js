angular.module('deck.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {
  'use strict';
  var card, deck, decks = {
    goat: {
      name: 'Goat Deck',
      cards: ['?', 0, '1/2', 1, 2, 3, 5, 8, 13, 20, 40, 100, '&infin;']
    },
    fibonacci: {
      name: 'Fibonacci',
      cards: ['?', 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, '&infin;']
    }
  };

  var getCard = function() {
    return card;
  };

  var setCard = function(card) {
    $scope.card = card;
  };

  var changeDeckModal; // To be filled in

  var changeDeck = function() {
    $ionicModal.fromTemplateUrl('templates/change-deck-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      changeDeckModal = modal;
      modal.show();
    });
  };

  var getDeck = function() {
    return deck;
  };

  var setDeck = function(deckId) {
    if(angular.isString(deckId)) {
      deck = decks[deckId];
    } else {
      deck = deckId;
    }
    setCard(deck.cards[0]);
    if(changeDeckModal) {
      changeDeckModal.hide();
    }
  };

  var getDecks = function() {
    return decks;
  };

  setDeck('goat');
  setCard('&rarr;');

  angular.extend($scope, {
    changeDeck: changeDeck,
    getCard: getCard,
    getDeck: getDeck,
    getDecks: getDecks,
    setCard: setCard,
    setDeck: setDeck
  });
})

.controller('CardsCtrl', function() {
  // ...
})

; // Done
