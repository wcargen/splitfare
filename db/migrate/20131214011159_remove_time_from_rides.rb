class RemoveTimeFromRides < ActiveRecord::Migration
   def change
    remove_column :rides, :time
  end
end