class FixColumnName < ActiveRecord::Migration
 def change
    rename_column :rides, :destination_lat, :latitude
  end
end