class RideUser < ActiveRecord::Base
  attr_accessible :user_id, :ride_id

  belongs_to :user
  belongs_to :ride
end
