class RemoveColumnFromRides < ActiveRecord::Migration

  remove_column :rides, :airline

end