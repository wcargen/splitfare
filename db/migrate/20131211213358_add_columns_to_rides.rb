class AddColumnsToRides < ActiveRecord::Migration
  def change
    add_column :rides, :d_latitude, :float
    add_column :rides, :d_longitude, :float
  end
end
