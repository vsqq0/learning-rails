class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :commentable_id
      t.string :comment_type

      t.timestamps
    end
  end
end
