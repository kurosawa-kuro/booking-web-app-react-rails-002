class Room < ApplicationRecord
    has_many :bookings
    has_many :room_tags, dependent: :destroy
    has_many :tags, through: :room_tags
  end