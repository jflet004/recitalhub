class Recital < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true

  has_many :students
  has_many :tickets
  has_many :users, through: :tickets
end
