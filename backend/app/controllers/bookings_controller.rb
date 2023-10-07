class BookingsController < ApplicationController
  before_action :set_booking, only: %i[ show update destroy ]

  # GET /bookings or /users/:user_id/bookings
  def index
    if params[:user_id]
      @bookings = Booking.includes(:room).where(user_id: params[:user_id])
    else
      @bookings = Booking.all.includes(:room)
    end

    render json: @bookings.as_json(include: :room)
  end


  # GET /bookings/1
  def show
    render json: @booking
  end

  # POST /bookings
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: @booking, status: :created, location: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booking_params
      params.require(:booking).permit(:user_id, :room_id, :start_date, :end_date, :total_price)
    end
end
