class RemoveTicketsSoldFromRecitals < ActiveRecord::Migration[6.1]
  def change
    remove_column :recitals, :tickets_sold, :integer
  end
end
