class Location < ActiveRecord::Base
  attr_accessible :address, :city, :lat, :long, :nickname, :state, :user_id, :zip

  belongs_to :user
end
