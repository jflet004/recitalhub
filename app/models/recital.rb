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

  # def add_student(student_name, age)
  #   student = Student.create(name: student_name, age: age)
  #   self.students << student
  # end

  # def update_capacity(number)
  #   self.update(capacity:number)
  # end

  # def self.update_capacity_all(number)
  #   self.update_all(capacity: number)
  # end

  # def number
  #   user = User.find(session[:user_id])
  #   user.tickets.quantity
  # end

end
