class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :tickets
  # has_many :recitals

end
