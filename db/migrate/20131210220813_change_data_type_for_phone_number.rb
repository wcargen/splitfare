class ChangeDataTypeForPhoneNumber < ActiveRecord::Migration
  def up
    change_table :users do |t|
      t.change :phone_number, :bigint
    end
  end

  def down
    change_table :users do |t|
      t.change :phone_number, :integer
    end
  end
end
