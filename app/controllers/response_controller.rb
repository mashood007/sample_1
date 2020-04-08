class ResponseController < ApplicationController
  require 'net/http'
  require 'json'

  def import
	url = 'https://plato.com/response/export'
	uri = URI(url)
	response = Net::HTTP.get(uri)
	JSON.parse(response)			
  end

  def export

  end

end
