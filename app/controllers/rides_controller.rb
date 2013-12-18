class RidesController < ApplicationController
  def index
    @ride = Ride.new
    @current_rides = Ride.where("user_id != ?", current_user.id).find(:all,
      :order => "ride_time",
      :conditions => ['ride_time >= ?', Date.today])
    @user_rides = Ride.where("user_id = ?", current_user.id).find(:all,
      :order => "ride_time",
      :conditions => ['ride_time >= ?', Date.today])
    # @phone = User.find(params[:user_id]).phone_number

    respond_to do |format|
      format.html
      format.json { render :json => @current_rides}
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