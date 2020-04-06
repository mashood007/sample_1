class ApplicationController < ActionController::Base
before_action :authenticate_user!

	def check_org
	 	if current_user.organisation_id.blank?
    		redirect_to alter_organisations_url
    	elsif current_user.organisation.subscription_id.blank?
    		redirect_to plan_choice_organisations_url
    	end
	end 
end
