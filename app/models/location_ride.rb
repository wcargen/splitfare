class LocationRide < ActiveRecord::Base
  attr_accessible :location_id, :ride_id

  belongs_to :location, :ride
end
