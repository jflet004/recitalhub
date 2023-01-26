class AddTicketsLeftToRecitals < ActiveRecord::Migration[6.1]
  def change
    add_column :recitals, :tickets_left, :integer, default: 0
  end
end
