class RemoveTicketsLeftFromRecitals < ActiveRecord::Migration[6.1]
  def change
    remove_column :recitals, :tickets_left, :integer
  end
end
