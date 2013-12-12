class RidesController < ApplicationController
  def index
    @rides = Ride.all
  end

  def new
    @ride = Ride.new
  end

  def create
      @ride = Ride.create(address: params[:ride][:address],
        destination: params[:ride][:destination])
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
