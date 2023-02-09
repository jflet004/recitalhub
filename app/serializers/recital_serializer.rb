class RecitalSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :capacity, :img_url, :tickets_sold, :tickets_left
  has_many :students, serializer: StudentShortInfoSerializer

  def description
    object.description.truncate(100)
  end

end
