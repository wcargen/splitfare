class FixColumnName4 < ActiveRecord::Migration
def change
    rename_column :rides, :destination_long, :longitude
  end
end
