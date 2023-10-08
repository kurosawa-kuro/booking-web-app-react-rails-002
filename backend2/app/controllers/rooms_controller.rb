class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show update destroy ]

  # GET /rooms
  def index
    @rooms = Room.all.includes(:tags)
    render json: @rooms.to_json(include: [:tags])
end

  # GET /rooms/1
  def show
    render json: @room.as_json(include: :tags)
  end

  # POST /rooms
  def create
    @room = Room.new(room_params)

    if @room.save
      render json: @room, status: :created, location: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rooms/1
  def update
    if @room.update(room_params)
      render json: @room
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
      params.require(:room).permit(:room_number, :description, :capacity, :price_per_night, :room_type, :image_path)
    end
end
