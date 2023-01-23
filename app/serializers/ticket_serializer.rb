class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity, :user_id, :recital_id
end
