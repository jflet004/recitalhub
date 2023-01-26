class AddCapacityToRecitals < ActiveRecord::Migration[6.1]
  def change
    add_column :recitals, :capacity, :integer, default: 0
  end
end
