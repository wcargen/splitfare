class RidesController < ApplicationController
  def index
    @rides = Ride.all
    @current_rides = Ride.where("user_id != ?", current_user.id)
    @user_rides = Ride.where("user_id = ?", current_user.id)

    respond_to do |format|
      format.html
      format.json { render :json => @rides}
    end
  end

  def new
    @ride = Ride.new
  end

  def create
    ride = params[:ride]
    date = params[:ride][:ride_time]
    selected_date = DateTime.strptime("#{date}","%m/%d/%Y %H:%M %p").to_datetime.strftime("%Y-%m-%d %H:%M")
    current_user.rides.create(
      address: params[:ride][:address],
      destination: params[:ride][:destination],
      details: params[:ride][:details],
      ride_time: selected_date)
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