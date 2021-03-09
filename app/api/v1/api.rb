# app/api/v1/root.rb
module V1
  class API < Grape::API
    # prefix :api
    version :v1
    mount Users
    mount Toys
    mount Orders

  end
end