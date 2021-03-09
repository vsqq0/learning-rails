class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :toy_id
      # t.integer :user_id
      t.belongs_to :user
      t.belongs_to :card
      t.timestamps
    end
  end
end
