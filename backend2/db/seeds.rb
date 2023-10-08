# db/seeds.rb

# Users
user_attributes = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password',
    admin: true
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password',
    admin: false
  },
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'password',
    admin: false
  }
]

User.create!(user_attributes)

# Image paths for rooms
image_paths = [
  'https://static.amanaimages.com/imgroom/rf_preview640/11014/11014019870.jpg',
  'https://pro.foto.ne.jp/free/img/images_big/sit0009-001.jpg',
  'https://gahag.net/img/201605/23s/gahag-0088897439-1.jpg',
  'http://www.appli-cation.com/photo/wp-content/uploads/2015/08/0192.jpg',
  'https://static.amanaimages.com/imgroom/rf_preview640/10904/10904001375.jpg',
  'https://pro.foto.ne.jp/free/img/images_big/sit0009-001.jpg'
]

# Rooms
room_attributes = [
  {
    room_number: '101',
    description: 'オーシャンビューのデラックスシングルルーム',
    capacity: 1,
    price_per_night: 100.0,
    room_type: 'Single',
    image_path: image_paths[0]
  },
  {
    room_number: '102',
    description: '庭の景色が楽しめるデラックスダブルルーム',
    capacity: 2,
    price_per_night: 180.0,
    room_type: 'Double',
    image_path: image_paths[1]
  },
  {
    room_number: '103',
    description: 'バルコニー付きのエグゼクティブスイートルーム',
    capacity: 4,
    price_per_night: 350.0,
    room_type: 'Suite',
    image_path: image_paths[2]
  },
  {
    room_number: '104',
    description: '快適なダブルルーム',
    capacity: 2,
    price_per_night: 200.0,
    room_type: 'Double',
    image_path: image_paths[3]
  },
  {
    room_number: '105',
    description: 'ゆったりとしたスイートルーム',
    capacity: 3,
    price_per_night: 250.0,
    room_type: 'Suite',
    image_path: image_paths[4]
  },
  {
    room_number: '106',
    description: 'シンプルで機能的なシングルルーム',
    capacity: 1,
    price_per_night: 150.0,
    room_type: 'Single',
    image_path: image_paths[5]
  }
]

Room.create!(room_attributes)

# Bookings
booking_attributes = [
  {
    user_id: User.first.id,
    room_id: Room.first.id,
    start_date: Date.today + 7,
    end_date: Date.today + 10,
    total_price: 300.0
  },
  {
    user_id: User.second.id,
    room_id: Room.second.id,
    start_date: Date.today + 5,
    end_date: Date.today + 8,
    total_price: 540.0
  },
  {
    user_id: User.third.id,
    room_id: Room.third.id,
    start_date: Date.today + 10,
    end_date: Date.today + 14,
    total_price: 1400.0
  }
]

Booking.create!(booking_attributes)

# Tags
tags = ['ビューオーシャン', 'シングル', 'デラックス', 'スイート', 'ペット可']
tag_instances = Tag.create!(tags.map { |name| { name: name } })

# Associate tags with rooms
Room.all.each do |room|
  room.tags << tag_instances.sample(rand(1..3))
end