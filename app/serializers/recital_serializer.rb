class RecitalSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_many :users
  has_many :tickets
end
