module V1
  class Toys < Grape::API
    # GET /v1/
    get 'toy/all' do
      Toy.all
    end
    post 'toy/delete' do
      Toy.destroy_by(id: params[:id])
    end
    post 'toy/create' do
      Toy.create(params)
    end
  end
end
