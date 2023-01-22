Rails.application.routes.draw do
  
  resources :recitals
  get "/recitals", to: "recitals#index"
  get "/recitals/:id", to: "recitals#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
