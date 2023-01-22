class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.float :price
      t.integer :quantity, default:1

      t.timestamps
    end
  end
end
