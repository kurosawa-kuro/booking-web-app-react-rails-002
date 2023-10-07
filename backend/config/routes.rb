Rails.application.routes.draw do
  resources :tags
  scope 'auth' do
    post 'register', to: 'auth#register'
    post 'login', to: 'auth#login'
    delete 'logout', to: 'auth#logout'
  end

  resources :rooms

  resources :users do
    resources :bookings, only: [:index]
  end
  
  resources :bookings, except: [:index] # :indexを除外
end
