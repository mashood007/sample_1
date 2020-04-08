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


  function children(parent)
  {

	$.ajax({
	  url: "cards/get_children",
	  type: "get", //send it through get method
	  data: { 
	     parent: parent 
	  },
	  success: function(response) {
	    //Do Something
	  },
	  error: function(xhr) {
	    //Do Something to handle error
	  }
	});

  }

function close_modal()
{
	$('.tasks_modal').hide()
}

	function card_tasks(id)
	{

		// id = $(this).data('id')
	
		$.ajax({
		  url: "/cards/"+id+"/tasks",
		  type: "get", //send it through get method
		  success: function(response) {
		    //Do Something
		  },
		  error: function(xhr) {
		    //Do Something to handle error
		  }
		});		
	
	}

	function select_subsciption_type(subscription_id)
	{
		$("#subscribe_subscription_id").val(subscription_id)
		$('.subscription_type').removeClass('border_red')
		$("#subscription_type_"+subscription_id).addClass("border_red")
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
		calculate_subscription(subscription_id)
	}

	function calculate_subscription(id)
	{
		var number_of_users = $("#number_of_users").val()
		var number_of_boards = $("#number_of_boards").val()
		$.ajax({
		  url: "/subscriptions/calculate.json",
		  type: "get", //send it through get method
		  data: { 
		     id: id,
		     number_of_users: number_of_users,
		     number_of_boards: number_of_boards 
		  },
		  success: function(response) {
		  	if (response.title == "error")
		  	{
		  		$('.subscribe_button').hide();
				var message = "<div class='alert alert-danger'>"+response.message+"</div>"
		  	}
		  	else
		  	{
		  		$('.subscribe_button').show();
		  		var message = "<div class='alert alert-success'>"+response.message+"</div>"
		  	}
		    $('.subscription_messages').html(message)
		  },
		  error: function(xhr) {
		    //Do Something to handle error
		  }
		});
	}