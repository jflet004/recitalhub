class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity, :user_id, :recital_id, :recital

  def recital
    { id: self.object.id, title: self.object.recital.title, quantity: self.object.quantity  }
  end

end
