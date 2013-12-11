class FixColumnName2 < ActiveRecord::Migration
   def change
    rename_column :locations, :long, :longitude
  end
end
