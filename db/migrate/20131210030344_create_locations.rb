class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.integer :user_id
      t.string :nickname
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.float :lat
      t.float :long

      t.timestamps
    end
  end
end
