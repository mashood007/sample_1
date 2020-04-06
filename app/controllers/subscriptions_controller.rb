class SubscriptionsController < ApplicationController


  def details
  	if !params[:id].blank?
  		@subscription = Subscription.find(params[:id])
  	end
  end

  def total_amount
  end

end
