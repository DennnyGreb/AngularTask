
var app = angular.module('mainApp', []);

app.controller('mainCtrl', function() {
  this.addItem = function(item) {
    console.log(item);
  }
});
