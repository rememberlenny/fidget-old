class MapProjects < ActiveRecord::Base
  belongs_to :user
  default_scrop -> { order('created_at DESC') }
  validates :user_id, presence: true
end
