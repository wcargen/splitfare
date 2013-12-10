class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.integer :user_id
      t.integer :location_id
      t.string :destination
      t.integer :destination_lat
      t.integer :destination_long
      t.string :airline
      t.datetime :arrival_time
      t.text :details
      t.timestamps
    end
  end
end
