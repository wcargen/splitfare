class ChangeDataTypesForRides < ActiveRecord::Migration
  def up
    change_table :rides do |t|
      t.change :latitude, :float
      t.change :longitude, :float
    end
  end

  def down
    change_table :rides do |t|
      t.change :destination_lat, :integer
      t.change :destination_long, :finteger
    end
  end
end
