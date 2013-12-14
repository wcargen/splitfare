class RidesController < ApplicationController
  def index
    @rides = Ride.all
    @current_rides = Ride.where("user_id != ?", current_user.id)
    # binding.pry
  end

  def new
    @ride = Ride.new
  end

  def create
    ride = params[:ride]
    date = DateTime.new ride["ride_time(1i)"].to_i, ride["ride_time(2i)"].to_i, ride["ride_time(3i)"].to_i,
                    ride["ride_time(4i)"].to_i, ride["ride_time(5i)"].to_i
    current_user.rides.create(
      address: params[:ride][:address],
      destination: params[:ride][:destination],
      details: params[:ride][:details],
      ride_time: date)
    redirect_to rides_path
  end

  def show

  end

  def edit

  end

  def update

  end

  def destroy

  end

end