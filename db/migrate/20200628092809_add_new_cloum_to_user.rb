class AddNewCloumToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :new_state, :integer
  end
end
