class User < ApplicationRecord
  # has_many :toies, :through => :orders

  has_many :orders
  has_many :toy, :through => :orders

  # has_and_belongs_to_many :cards, join_table: "orders"
  # has_and_belongs_to_many :cards

  has_many :cards
  enum state: { checking: 0, passed: 1, rejected: 2 }
  enum new_state: { no: 0, yes: 1, anther: 2 }
end
