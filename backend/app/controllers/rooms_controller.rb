class RoomsController < ApplicationController
  before_action :set_room, only: [:show, :update, :destroy]

  # GET /rooms
  def index
    @rooms = Room.includes(:tags)
    render json: @rooms.as_json(include: { tags: { only: [:id, :name, :created_at, :updated_at] } })
  end

  # GET /rooms/1
  def show
    render json: @room.as_json(include: { tags: { only: [:id, :name, :created_at, :updated_at] } })
  end

  # POST /rooms
  def create
    @room = Room.new(room_params)

    if @room.save
      render json: @room.as_json(include: { tags: { only: [:id, :name, :created_at, :updated_at] } }), status: :created, location: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rooms/1
  def update
    if @room.update(room_params)
      render json: @room.as_json(include: { tags: { only: [:id, :name, :created_at, :updated_at] } })
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rooms/1
  def destroy
    @room.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_room
    @room = Room.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def room_params
    params.require(:room).permit(:room_number, :description, :capacity, :price_per_night, :room_type)
  end
end
