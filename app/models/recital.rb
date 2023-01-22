class Recital < ApplicationRecord
  has_many :students
  has_many :tickets
  has_many :users, through: :tickets
end
