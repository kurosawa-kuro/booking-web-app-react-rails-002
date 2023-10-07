Rails.application.routes.draw do
  scope 'auth' do
    post 'register', to: 'auth#register'
    post 'login', to: 'auth#login'
    delete 'logout', to: 'auth#logout'
  end

  resources :bookings
  resources :rooms
  resources :users
end