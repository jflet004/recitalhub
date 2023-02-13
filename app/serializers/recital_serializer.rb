class RecitalSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :price, :description, :capacity, :img_url, :tickets_sold, :tickets_left
  
  has_many :students, serializer: StudentShortInfoSerializer

end
