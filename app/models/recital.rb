class Recital < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  has_many :students
  has_many :tickets, dependent: :destroy
  has_many :users, through: :tickets

  def tickets_sold
    self.tickets.sum{|ticket| ticket.quantity}
  end

  def tickets_left
    self.capacity - self.tickets_sold
  end

end
