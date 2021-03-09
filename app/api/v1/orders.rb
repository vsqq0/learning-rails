module V1
  class Orders < Grape::API
    # GET /v1/
    get 'order/all' do
      binding.pry

      orderList = Order.all.map do |order|
        order.orderInfo
      end
      orderList
    end
    post 'order/delete' do
      Order.destroy_by(id: params[:id])
    end
    post 'order/create' do
      Order.create(params)
    end
  end
end
