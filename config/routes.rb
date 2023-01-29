Rails.application.routes.draw do
  
  resources :students, only: [:index]
  resources :tickets, only: [:index, :create, :update]

  #Custom Routes
  get '/recitals', to: "recitals#index"
  post '/recitals/new', to: "recitals#create"
  get '/recitals/:id', to: "recitals#show"
  delete '/recitals/:id', to: "recitals#destroy"
  
  get '/tickets', to: "recitals#index"
  post '/tickets/new', to: "recitals#create"
  patch '/tickets/:id', to: "recitals#show"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"





  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
