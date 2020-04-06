class HomeController < ApplicationController
	layout "setup", only: [:new]
	before_action :check_org

	def index
		puts "*******curre",current_user.inspect
		#@user = User.find(session[:user_id])
	end

	def new
	end

	def login
		
	end

	def logout
    	session[:user_id] = nil         
    	redirect_to new_home_path
    end 

end
