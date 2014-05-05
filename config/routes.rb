Splitfare::Application.routes.draw do

  devise_for :users, :rides

  devise_scope :user do
    root :to => 'welcome#index'
  end

  resources :users, :rides, :locations, :send_text

  get '/about', to: 'welcome#about'

end
