class RidesController < ApplicationController
  def index
    @rides = Ride.all
    # @current_rides = Ride.where("user_id != ?", current_user.id)
    # binding.pry
  end

  def new
    @ride = Ride.new
  end

  def create
      current_user.rides.create(address: params[:ride][:address],
        destination: params[:ride][:destination])
      redirect_to rides_path
  end

  def show
    @current_rides = Ride.where("user_id != ?", current_user.id)
  end

  def edit

  end

  def update

  end

  def destroy

  end

end
