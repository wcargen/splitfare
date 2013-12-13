class Ride < ActiveRecord::Base
  attr_accessible :user_id, :location_id, :destination, :latitude, :longitude,
                  :airline, :time, :address, :details, :d_latitude, :d_longitude

  belongs_to :user
  has_many :users, :through => :ride_users
  has_many :locations, :through => :location_rides


  geocoded_by :address
  # geocoded_by :destination, :latitude  => :d_latitude, :longitude => :d_longitude

  after_validation :geocode

  before_create do |ride|
    data = Geocoder.coordinates(ride.destination)
    ride.d_longitude = data[0]
    ride.d_latitude = data[1]
  end

end
