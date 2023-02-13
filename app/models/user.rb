class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  # validates :password, length: { minimum: 6, maximum: 8 }
  
  has_many :tickets
  has_many :recitals, through: :tickets

  has_secure_password

  def make_admin
    self.update(admin: true)
  end

end
