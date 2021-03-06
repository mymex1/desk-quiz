'use strict';

angular.module('deskQuizApp')
  .factory('questions', ['$http', function ($http) {
    const path = '/api/questions';
    var questions = $http.get(path).then((resp) => {
      return resp.data;
    });

    var factory = {};
    factory.all = function () {
      return questions;
    };
    return factory;

  }]);
