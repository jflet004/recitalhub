class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity, :total_price, :created_at
  belongs_to :user, serializer: TicketUserSerializer
  belongs_to :recital, serializer: TicketRecitalSerializer
end
