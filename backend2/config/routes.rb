Rails.application.routes.draw do
  resources :tags
  resources :bookings
  resources :rooms
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end