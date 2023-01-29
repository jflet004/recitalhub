Rails.application.routes.draw do
  
  resources :students, only: [:index]
  resources :users, only: [:index, :show, :create]
  resources :tickets, only: [:index, :create, :update]
  resources :recitals

  #Custom Routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"





  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
