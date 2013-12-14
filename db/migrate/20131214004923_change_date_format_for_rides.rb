class ChangeDateFormatForRides < ActiveRecord::Migration
   def change
    remove_column :rides, :time
    remove_column :rides, :date
    remove_column :rides, :location_id
  end
end