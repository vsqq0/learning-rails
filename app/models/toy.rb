class Toy < ApplicationRecord
  # has_many :users, :through => :orders
  # has_and_belongs_to_many :user#, join_table: "orders"
  has_many :users, :through => :orders
  has_many :orders

  has_many :comments, :as => :commentable

  scope :old, -> { where('id < 5')}
end
