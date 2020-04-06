// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require organisations.js
//= require bootstrap-sprockets

$(document).ready(function(){

  $('.subscribe_button').hide()	
  $("#subscribe_subscription_id").val("")
  $("#subscribe_subscription_id").change(function(){
  	var subscription_id = $(this).val()
    if (subscription_id.length > 0)
    {
    	$('.subscribe_button').show()
    }	
    else
    {
    	$('.subscribe_button').hide()
    }

	$.ajax({
	  url: "/subscriptions/details",
	  type: "get", //send it through get method
	  data: { 
	     id: subscription_id 
	  },
	  success: function(response) {
	    //Do Something
	  },
	  error: function(xhr) {
	    //Do Something to handle error
	  }
	});


    
  });



});
