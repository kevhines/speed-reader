Rails.application.routes.draw do
  # resources :users
  resources :sentences

  post '/signup', to: "users#create"
  post '/login', to: "users#new", as: "login"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
