class AddRecitalIdToTickets < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :recital_id, :integer
  end
end
