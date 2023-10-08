Rails.application.routes.draw do
  namespace :auth do
    post 'register', action: 'register'
    post 'login', action: 'login'
    delete 'logout', action: 'logout'
  end

  resources :tags
  resources :rooms
  resources :users do
    resources :bookings, only: [:index]
  end

  resources :bookings, except: [:index]
end
