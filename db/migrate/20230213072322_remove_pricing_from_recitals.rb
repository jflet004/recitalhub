class RemovePricingFromRecitals < ActiveRecord::Migration[6.1]
  def change
    remove_column :recitals, :pricing, :float
  end
end
