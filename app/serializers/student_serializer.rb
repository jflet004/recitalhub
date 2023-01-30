class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :recital_id
  has_one :recital
end
