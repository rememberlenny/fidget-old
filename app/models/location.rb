class Location < ActiveRecord::Base
  belongs_to :project
  geocoded_by :address
  reverse_geocoded_by :latitude, :longitude
   validates :project_id, presence: true
  after_validation :reverse_geocode, :geocode, :if => :address_changed?
end
