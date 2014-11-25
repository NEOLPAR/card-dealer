'use strict';

angular.module('CardDealerApp.sharedComponents.filters', [])
  .filter('html', ['$sce', function($sce){
    return function(input){
      return $sce.trustAsHtml(input);
    }
  }]);