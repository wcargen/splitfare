class AddUserIdToRide < ActiveRecord::Migration
  def change
    add_column :rides, :user_id, :integer
    add_column :rides, :location_id, :integer
    add_column :rides, :destination, :string
    add_column :rides, :destination_lat, :integer
    add_column :rides, :destination_long, :integer
    add_column :rides, :airline, :string
    add_column :rides, :arrival_time, :datetime
    add_column :rides, :details, :text
  end
end
