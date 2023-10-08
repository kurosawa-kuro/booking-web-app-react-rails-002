require "test_helper"

class RoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @room = rooms(:one)
  end

  test "should get index" do
    get rooms_url, as: :json
    assert_response :success
  end

  test "should create room" do
    assert_difference("Room.count") do
      post rooms_url, params: { room: { capacity: @room.capacity, description: @room.description, image_path: @room.image_path, price_per_night: @room.price_per_night, room_number: @room.room_number, room_type: @room.room_type } }, as: :json
    end

    assert_response :created
  end

  test "should show room" do
    get room_url(@room), as: :json
    assert_response :success
  end

  test "should update room" do
    patch room_url(@room), params: { room: { capacity: @room.capacity, description: @room.description, image_path: @room.image_path, price_per_night: @room.price_per_night, room_number: @room.room_number, room_type: @room.room_type } }, as: :json
    assert_response :success
  end

  test "should destroy room" do
    assert_difference("Room.count", -1) do
      delete room_url(@room), as: :json
    end

    assert_response :no_content
  end
end
