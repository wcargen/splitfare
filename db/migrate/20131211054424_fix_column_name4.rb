class FixColumnName4 < ActiveRecord::Migration
  def change
      rename_column :rides, :arrival_time, :date_time
  end
end
