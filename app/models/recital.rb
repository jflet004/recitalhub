class Recital < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  has_many :students
  has_many :tickets
  has_many :users, through: :tickets

  def tickets_sold
    self.tickets.sum{|ticket| ticket.quantity}
  end

  def add_student(student_name)
    student = Student.find_by(name: student_name)
    self.students << student
  end

  def students_performing
    self.students.map{|student| student.name}
  end

end
