class AddRideTimeToRides < ActiveRecord::Migration
  def change
    add_column :rides, :ride_time, :datetime
  end
end