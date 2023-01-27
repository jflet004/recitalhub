class Recital < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  has_many :students
  has_many :tickets
  has_many :users, through: :tickets

  def purchase_ticket(price,qty)
    # if self.tickets_left > 0 
      ticket = Ticket.create(price:price, quantity:qty, recital_id: self.id, user_id: 3)
      self.tickets << ticket
    # else
    #   return "Sold Out!"
    # end
  end

  def tickets_sold
    self.tickets.sum{|ticket| ticket.quantity}
  end

  def tickets_left
    self.capacity - self.tickets_sold
  end

  def add_student(student_name)
    student = Student.find_by(name: student_name)
    self.students << student
  end

  # def students_performing
  #   self.students.map{|student| student.name}
  # end

  def update_capacity(number)
    self.update(capacity:number)
  end

  def self.update_capacity_all(number)
    self.update_all(capacity: number)
  end



end
