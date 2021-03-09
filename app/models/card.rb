class Card < ApplicationRecord
  has_many :comments, :as => :commentable
  belongs_to :user
  delegate :name, to: :user, prefix: true #Card.first.user_name 直接通过card拿user的name
end
