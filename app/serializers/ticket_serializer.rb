class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
end
