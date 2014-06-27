class AddImagesToLocation < ActiveRecord::Migration
  def change
    add_column :locations, :image_url, :string
  end
end
