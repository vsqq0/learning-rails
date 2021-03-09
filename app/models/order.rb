class Order < ApplicationRecord
  # belongs_to :toy
  belongs_to :user, inverse_of: :orders
  belongs_to :toy, optional: true

  # delegate :name, to: :user, prefix: true 

  def orderInfo
    self.as_json.merge!({user_name: self.user&.name, toy_name: self.toy&.name})
  end
  
end
