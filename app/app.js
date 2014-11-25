'use strict';

var CardDealerApp = angular.module('CardDealerApp', [
  'ngRoute',
  'CardDealerApp.sharedComponents.filters',
  'CardDealerApp.boardView.BoardController',
  'CardDealerApp.boardView.deckService',
  'CardDealerApp.boardView.CardClass',
  'CardDealerApp.boardView.cardsDirective',
  'CardDealerApp.boardView.formSelectNumberDirective'
]);

CardDealerApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/board', {
      templateUrl: './app/board-view/board_template.html',
      controller: 'BoardController'
    })
    .otherwise({
      redirectTo: '/board'
    });
}]);