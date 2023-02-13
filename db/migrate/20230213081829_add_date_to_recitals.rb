class AddDateToRecitals < ActiveRecord::Migration[6.1]
  def change
    add_column :recitals, :date, :date
  end
end
