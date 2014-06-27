class AddArtistToLocation < ActiveRecord::Migration
  def change
    add_column :locations, :artist_name, :string
  end
end
