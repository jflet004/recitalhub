class User < ApplicationRecord
  has_many :tickets
  has_many :recitals, through: :tickets
end
