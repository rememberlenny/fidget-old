class CreateGraffitis < ActiveRecord::Migration
  def change
    create_table :graffitis do |t|
      t.string :image_id
      t.string :image_url
      t.string :user
      t.string :source
      t.string :date_published
      t.string :post_id

      t.timestamps
    end
  end
end
