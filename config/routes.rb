Splitfare::Application.routes.draw do

  devise_for :users

  root :to => 'rides#index'

  resources :users, :rides

end
