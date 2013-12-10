class RemoveAddressFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :address
    remove_column :users, :city
    remove_column :users, :state
    remove_column :users, :zip_code
  end
end
