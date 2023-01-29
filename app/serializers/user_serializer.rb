class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :tickets
  # has_many :recitals

end
