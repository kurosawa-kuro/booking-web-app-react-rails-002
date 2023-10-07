class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :room_number
      t.text :description
      t.integer :capacity
      t.decimal :price_per_night
      t.string :room_type

      t.timestamps
    end
    add_index :rooms, :room_number, unique: true
  end
end
