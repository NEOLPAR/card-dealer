'use strict';

angular.module('CardDealerApp.boardView.formSelectNumberDirective', [])
  .directive('formSelectNumberDir', [function(){
    return {
      restrict: 'E',
      templateUrl: './app/board-view/form-select-number/form_select_number_panel.html',
      scope: {
        cards: '&',
        suffle: '&'
      },
      link: function(scope){
        scope.newAmount = [];

        var resetForm = function(){
          scope.amount = angular.copy(scope.newAmount);
        }

        scope.placeCards = function(amount){
          scope.cards()(amount);
          resetForm();
        }

        scope.suffles = function(){
          scope.suffle()();
        }
      }
    };
  }]);