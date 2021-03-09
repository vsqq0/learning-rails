class CreateToys < ActiveRecord::Migration[6.0]
  def change
    create_table :toys do |t|
      t.integer :num 
      t.string :name
      t.timestamps
    end
  end
end
