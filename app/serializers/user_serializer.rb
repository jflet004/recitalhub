class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin, :tickets
  # has_many :recitals
  has_many :tickets




end
