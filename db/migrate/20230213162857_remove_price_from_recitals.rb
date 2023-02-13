class RemovePriceFromRecitals < ActiveRecord::Migration[6.1]
  def change
    remove_column :recitals, :price, :float
  end
end
