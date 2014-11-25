'use strict';

angular.module('CardDealerApp.boardView.CardClass', [])
  .factory('Card', [function(){
    var Card = function(rank, suit){
      this.rank = rank;
      this.suit = suit;
    }

    return Card;
  }]);
