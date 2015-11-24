module.exports = function viewModel() {
  var ko = require('knockout');

  var self = this;

  self.loaded = ko.observable(false);
  
  self.people =
      ko.observableArray([{
      Name: '',
      Age: 1,
      Weight: 1
    }]);
}
