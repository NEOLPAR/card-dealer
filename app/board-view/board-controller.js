'use strict';

angular.module('CardDealerApp.boardView.BoardController', [])
  .controller('BoardController', ['$scope', 'deckService', function($scope, deckService){
    $scope.suffle = function(){
      deckService.suffle();
    }

    $scope.placeCards = function(number){
      $scope.deck = deckService.getCards(number);
    }
  }]);