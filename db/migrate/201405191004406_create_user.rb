class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :name
      t.string :oauth_token
      t.string :image
      t.datetime :oauth_expires_at

      t.timestamps
    end
  end
end
