class RecitalSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :tickets_left, :capacity, :tickets_sold
  has_many :tickets
  # has_many :students

end
