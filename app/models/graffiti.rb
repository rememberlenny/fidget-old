class Graffiti < ActiveRecord::Base
  def self.import(file)
    @file = file.read
    SmarterCSV.process(@file, :chunk_size => 50000) do |chunk|
      chunk.each do |row|
        row = row.slice(:image_id, :image_url, :user,  :date_published,  :post_id)
        row.values.each { |f| f.gsub!(/\"/, '') }
        Graffiti.create(row)
      end
    end
  end
end
