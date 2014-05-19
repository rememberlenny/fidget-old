class AddProjectsToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :location_id, :integer
  end
end
