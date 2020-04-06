Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :boards
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  resources :home, only: [:new, :index]

  get '/logout', to: 'home#logout', as: 'logout'

  resources :organisations do
  	  collection do
    	get 'plan_choice'
    	patch 'subscribed'
      get 'alter'
  	  end
  end


  resources :subscriptions do
  	collection do 
  		get :details
    end
  end

end
