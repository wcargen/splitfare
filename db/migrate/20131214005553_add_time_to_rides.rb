class AddTimeToRides < ActiveRecord::Migration
  def change
    add_column :rides, :time, :datetime
  end
end