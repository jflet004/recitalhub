class RecitalSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url, :tickets_left, :capacity, :tickets_sold, :students
  has_many :tickets
  has_many :students

  

end
