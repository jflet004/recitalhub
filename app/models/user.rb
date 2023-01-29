class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  
  has_many :tickets
  has_many :recitals, through: :tickets

  has_secure_password
  
end
