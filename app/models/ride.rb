class Ride < ActiveRecord::Base
  attr_accessible :user_id, :location_id, :destination, :destination_lat, :destination_long,
                  :airline, :arrival_time, :address

  belongs_to :user
  has_many :users, :through => :ride_users
  has_many :locations, :through => :location_rides

  geocoded_by :address
  after_validation :geocode
end
