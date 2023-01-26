class AddTicketsSoldToRecitals < ActiveRecord::Migration[6.1]
  def change
    add_column :recitals, :tickets_sold, :integer
  end
end
