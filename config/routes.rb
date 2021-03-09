Rails.application.routes.draw do
  root 'users#home'
  resources :users
  mount Base::API => '/'
end
