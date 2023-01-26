class AddRecitalIdToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :recital_id, :integer
  end
end
