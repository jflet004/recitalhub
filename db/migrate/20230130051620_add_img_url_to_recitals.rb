class AddImgUrlToRecitals < ActiveRecord::Migration[6.1]
  def change
    add_column :recitals, :img_url, :string
  end
end
