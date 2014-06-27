class AddFeaturedImageToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :featured_image, :string
  end
end
