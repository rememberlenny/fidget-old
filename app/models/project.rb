class Project < ActiveRecord::Base
  belongs_to :user
  has_many :locations
    geocoded_by :address
  reverse_geocoded_by :latitude, :longitude
  # validates :project_id, presence: true
  after_validation :reverse_geocode, :geocode, :if => :address_changed?
  # default_scrop -> { order('created_at DESC') }
  # validates :user_id, presence: true
end
