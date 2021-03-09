module V1
  class Users < Grape::API
    # GET /v1/
    get 'user/all' do
            
      User.all
    end
    post 'user/delete' do
      User.destroy_by(id: params[:id])
    end
    post 'user/create' do
      User.create(params)
    end
  end
end
