class CreateMapProjects < ActiveRecord::Migration
  def change
    create_table :map_projects do |t|
      t.string :name
      t.datetime :last_modified
      t.integer :user_id
      t.timestamps
    end
  end
end
