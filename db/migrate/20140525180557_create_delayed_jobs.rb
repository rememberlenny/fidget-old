class CreateDelayedJobs < ActiveRecord::Migration
  def change
    create_table :delayed_jobs do |t|

      t.timestamps
    end
  end
end
