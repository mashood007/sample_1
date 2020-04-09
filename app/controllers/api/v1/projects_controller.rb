class Api::V1::ProjectsController < ActionController::API 
  require 'rest-client'
  require 'json' 

  def index
  	@users = User.all
  	@boards = Board.all
  	render json: {users: @users, boards: @boards}
  end

  def import
  	puts "--------params",params.inspect 	
  end

end
