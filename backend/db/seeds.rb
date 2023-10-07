# Users
User.create!(
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password',
  admin: true
)

User.create!(
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  password: 'password',
  admin: false
)

User.create!(
  name: 'Alice Johnson',
  email: 'alice.johnson@example.com',
  password: 'password',
  admin: false
)

# Rooms
Room.create!(
  room_number: '101',
  description: 'Deluxe single room with ocean view',
  capacity: 1,
  price_per_night: 100.0,
  room_type: 'Single'
)

Room.create!(
  room_number: '102',
  description: 'Deluxe double room with garden view',
  capacity: 2,
  price_per_night: 180.0,
  room_type: 'Double'
)

Room.create!(
  room_number: '103',
  description: 'Executive suite with balcony',
  capacity: 4,
  price_per_night: 350.0,
  room_type: 'Suite'
)

# Bookings
Booking.create!(
  user_id: User.first.id,
  room_id: Room.first.id,
  start_date: Date.today + 7,
  end_date: Date.today + 10,
  total_price: 300.0
)

Booking.create!(
  user_id: User.second.id,
  room_id: Room.second.id,
  start_date: Date.today + 5,
  end_date: Date.today + 8,
  total_price: 540.0
)

Booking.create!(
  user_id: User.third.id,
  room_id: Room.third.id,
  start_date: Date.today + 10,
  end_date: Date.today + 14,
  total_price: 1400.0
)