class AddStartTimeToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :start_time, :datetime
    add_column :locations, :end_time, :datetime
  end
end
