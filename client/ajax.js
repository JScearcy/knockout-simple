module.exports = function getPeople() {
    var $ = require('jquery');
    return new Promise(function(resolve,reject){
      $.ajax({
        method: 'GET',
        url: '/api/people',
        datatype: 'json'
      }).done(function(res){
        resolve(res);
      }).fail(function(jqxhr, textStatus, error){
        reject(error);
      });
    });
  }
