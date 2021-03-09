class AddLotsOfUsersJob < ApplicationJob
  queue_as :default

  def perform(*args)
    sleep 10
    1000.times do |index|
      user = User.new
      user.name = "atpking#{index}"
      user.save
    end
  end
end
