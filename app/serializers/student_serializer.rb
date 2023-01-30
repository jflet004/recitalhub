class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age
  has_one :recital
end
