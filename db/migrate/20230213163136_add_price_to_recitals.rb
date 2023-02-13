class AddPriceToRecitals < ActiveRecord::Migration[6.1]
  def change
    add_column :recitals, :price, :float
  end
end
