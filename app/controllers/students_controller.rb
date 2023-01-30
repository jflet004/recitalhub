class StudentsController < ApplicationController

  def index
    students = Student.all
    render json: students, status: :ok
  end

  def create
    student = Student.create!(student_params)
    render json: student, status: :created
  end

  private

  def student_params
    params.permit(:id, :name, :age, :recital_id)
  end

end
