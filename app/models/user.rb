class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :first_name,
                  :last_name, :phone_number, :rating

  has_many :rides
  has_many :locations

  validates :first_name, :last_name, :email, :phone_number, :password, presence: true
end
