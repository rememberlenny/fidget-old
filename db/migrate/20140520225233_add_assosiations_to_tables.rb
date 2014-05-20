class AddAssosiationsToTables < ActiveRecord::Migration
  def change
    add_reference :locations, :project, index: true
    add_reference :projects, :user, index: true
  end
end
