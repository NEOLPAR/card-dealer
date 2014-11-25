'use strict';

angular.module('CardDealerApp.boardView.cardsDirective', [])
  .directive('cardsDir', ['$sce', function($sce){
    return {
      restrict: 'E',
      templateUrl: './app/board-view/cards-directive/cards_panel.html',
      scope: {
        deck: '='
      }
    }
  }]);