class ChangeDataTypeForRides < ActiveRecord::Migration
  def up
    change_table :rides do |t|
      t.change :time, :time
    end
  end

  def down
    change_table :rides do |t|
      t.change :time, :datetime
    end
  end
end