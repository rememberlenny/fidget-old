class AddProjectIdToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :project_id, :integer
  end
end
