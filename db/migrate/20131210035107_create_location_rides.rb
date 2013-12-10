class CreateLocationRides < ActiveRecord::Migration
  def change
    create_table :location_rides do |t|
      t.integer :location_id
      t.integer :ride_id
      t.timestamps
    end
  end
end
