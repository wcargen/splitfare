class FixColumnName5 < ActiveRecord::Migration
  def change
      rename_column :rides, :arrival_time, :time
  end
end