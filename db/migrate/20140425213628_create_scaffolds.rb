class CreateScaffolds < ActiveRecord::Migration
  def change
    create_table :scaffolds do |t|
      t.string :word
      t.integer :number

      t.timestamps
    end
  end
end
