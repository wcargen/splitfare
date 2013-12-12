Splitfare::Application.routes.draw do

  devise_for :users, :rides

  root :to => 'rides#index'

  resources :users, :rides, :locations

end
