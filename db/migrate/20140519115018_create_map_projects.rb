class CreateMapProjects < ActiveRecord::Migration
  def change
    create_table :map_projects do |t|
      t.string :name
      t.datetime :last_modified

      t.timestamps
    end
  end
end
