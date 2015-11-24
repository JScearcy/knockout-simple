var $ = require('jquery');

$(document).ready(function(){
  var ko = require('knockout'),
      viewModel = require('./viewModel'),
      getPeople = require('./ajax');

  var peopleView = new viewModel();

  ko.applyBindings(peopleView);

  getPeople()
    .then(function(data) {
      peopleView.people(data);
      setTimeout(function(){
        peopleView.loaded(true)
      }, 2000);
    });

})
