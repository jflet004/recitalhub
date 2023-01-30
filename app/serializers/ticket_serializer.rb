class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity, :user_id, :recital_id, :recital_info
  has_one :recital

  def recital_info
    {id: object.id, title: object.recital.title, quantity: object.quantity}
  end


end
