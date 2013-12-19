class SendTextController < ApplicationController
  def index
  end

  def create
    phone_number = params[:phone_number]
    first_name = params[:first_name]
    request_phone_number = params[:request_phone_number]

    twilio_sid = ENV["twilio_sid"]
    twilio_token = ENV["twilio_token"]
    twilio_phone_number = ENV["twilio_phone_number"]
    address = params[:address]
    ride_time = params[:ride_time]

    @twilio_client = Twilio::REST::Client.new twilio_sid, twilio_token

    @twilio_client.account.sms.messages.create(
      :from => "+1#{twilio_phone_number}",
      :to => phone_number,
      :body => "#{first_name} wants to join your ride to on #{ride_time}. Text/call him at #{request_phone_number} to plan your ride."
    )
    redirect_to root_path
  end
end
