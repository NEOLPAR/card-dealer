'use strict';

angular.module('CardDealerApp.boardView.deckService', [])
  .factory('deckService', ['Card', function(Card){
    var ranks=['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
        suits=['&spades;', '&clubs;', '&hearts;', '&diams;'],
        deck = new Array();

    var deckManager = {
      init: function(){
        var suitLength = suits.length,
            rankLength = ranks.length;

        for(var i = 0; i < suitLength; i++){
          var suit = suits[i];

          for(var j = 0; j < rankLength; j++){
            var rank = ranks[j];

            deck.push(new Card(rank, suit));
          }
        }

        return deck;
      },
      suffle: function() {
        if(deck.length === 0){
          this.init();
        }

        var newDeck = deck,
            newDeckLength = newDeck.length- 1,
            itemAtIndex = [],
            randomIndex;

        for (var i = newDeckLength; i >= 0; i--) {
          randomIndex = Math.floor(Math.random()*(i+1));
          itemAtIndex = newDeck[randomIndex];

          newDeck[randomIndex] = newDeck[i];
          newDeck[i] = itemAtIndex;
        }

        return newDeck;
      },
      getCards: function(number){
        if(deck.length === 0){
          this.suffle();
        }

        return deck.slice(0, number);
      }
    };

    return deckManager;
  }]);
