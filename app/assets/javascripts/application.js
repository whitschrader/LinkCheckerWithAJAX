// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var Callbacks = (function() {

  var createSite = function(endpoint, url) {
    var authParam = $('meta[name=csrf-param]').attr('content');
    var authToken = $('meta[name=csrf-token]').attr('content'); 

    
    url[authParam] = authToken;

    $.ajax({type: "post", url: endpoint, data: url}).then(postSuccessHandler, postFailureHandler);
    //make AJAX request
  };

  var addNewUrlToTable = function(url, httpResponse) {
    // Actually add the url and response code to the table
    $('#siteTable').append("<tr><td><a href=>" + url + "</a></td><td>" + httpResponse + "</td></tr>");

  };

  var postSuccessHandler = function(response) {
      Callbacks.addNewUrlToTable(response.url, 200);

    
      // Call addNewUrlToTable and insert the results
      // addNewUrlToTable('','');

  };

  var postFailureHandler  = function(response) {
      alert("Failed" + response);
  };

  var onSubmitSiteClickHandler =  function() {
      var site = $('#siteInput').val();

      var data = { site: { url: site } };
      
      Callbacks.createSite("http://localhost:3000/sites.json", data);
  };
  return {
    postSuccessHandler : postSuccessHandler,

    postFailureHandler : postFailureHandler,

    onSubmitSiteClickHandler : onSubmitSiteClickHandler,
    createSite : createSite,

    addNewUrlToTable : addNewUrlToTable
  };  
})();

$(window).load(function() {
  $("<label>New Site</label><br /><input type=\"text\" id=\"siteInput\"></input><button id=\"checkSite\">Check Site</button>").insertBefore("#siteTable");

  // Adding the onSubmitSiteClickHandler to kick off the ajax
  // request      
  $('#checkSite').click(Callbacks.onSubmitSiteClickHandler);

});