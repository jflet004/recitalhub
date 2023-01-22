Rails.application.routes.draw do
  
  resources :students, only: [:index]
  resources :users, only: [:show, :create]
  resources :tickets, only: [:create, :update]
  resources :recitals

  #Custom Routes

  # get "/recitals", to: "recitals#index"
  # get "/recitals/:id", to: "recitals#show"




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
