class Ticket < ApplicationRecord
  belongs_to :user
  belongs_to :recital
  
  def total_price
    total = self.price * self.quantity
    total.round(2)
  end

end
