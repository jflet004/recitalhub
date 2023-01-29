Rails.application.routes.draw do
  
  resources :students, only: [:index]
  # resources :tickets

  #Custom Routes
  get '/recitals', to: "recitals#index"
  post '/recitals/new', to: "recitals#create"
  get '/recitals/:id', to: "recitals#show"
  patch '/recitals/:id', to: "recitals#update"
  delete '/recitals/:id', to: "recitals#destroy"
  
  get '/tickets', to: "tickets#index"
  post '/tickets/new', to: "tickets#create"
  patch '/tickets/:id', to: "tickets#show"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"





  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
