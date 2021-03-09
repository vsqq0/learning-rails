
# 初始化项目
grape https://ruby-china.org/topics/25822

- 创建项目 rails new demo

- 安装gem插件 bundle i

- 替换 sqlite3 => gem 'mysql2'
安装mysql
创建自定义数据库 learnBuy # 自己建的数据库名字
config/database.yml
adapter: mysql2 # gem插件选的数据库
database: learnBuy # 自己建的数据库名字

- 添加 gem 'grape'
config/routes.rb 
mount Base::API => '/'

app/api/base/api.rb
module Base
  class API < Grape::API
    format :json
    mount V1::API
  end
end

/app/api/v1/api.rb
module V1
  class API < Grape::API
    version :v1
    mount Users # 自己的api类名字
  end
end

/app/api/v1/users.rb
module V1
  class Users < Grape::API
    # GET /v1/test
    get 'test' do
      {msg:'test is ok'}
    end
  end
end

- 断点调试
gem 'pry'
gem 'pry-rails'
使用 binding.pry

# 启动项目
rails s

# 项目功能

- 多对多关联 user toy order 

has_many :orders
has_many :toy, :through => :orders

order.create(user_id:1,toy_id:1) 手动创建关联  
User.first.toy.create(name:"55") #create自动创建order关联 new不会创建order关联

- 多态 toy card comment 
Toy.first.comments.new(content:'lala')

- 由于用户注册太快现在加入redis
gem 'redis'
#gem 'hiredis'
#gem 'redis-namespace'
gem "redis-rails"

启动redis redis-server
进入redis并查看redis端口 redis-cli
$redis.set('chunky', 'bacon')
$redis.get('chunky')

- 用sidekiq创建job异步任务
gem 'sidekiq'
#gem 'sidekiq-status'
rails g job add_lots_of_users

- 假删除记录

- 登录

- 多对多自关联

- 继承 
// todo



- api文档

- excel导入导出

- 文件图片上传

