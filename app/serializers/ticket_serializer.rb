class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  belongs_to :user, serializer: TicketUserSerializer
  belongs_to :recital, serializer: TicketRecitalSerializer
end
