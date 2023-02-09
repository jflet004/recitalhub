class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin
  has_many :tickets
end
