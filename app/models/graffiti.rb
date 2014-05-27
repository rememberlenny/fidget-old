class Graffiti < ActiveRecord::Base
  def self.import(file)
    @file = file.tempfile
    SmarterCSV.process(@file, {:chunk_size => 5000, :quote_char => "\x00"}) do |chunk|
      chunk.each do |row|
        row = row.slice(:image_id, :image_url, :user,  :date_published,  :post_id)
        Graffiti.create(row)
      end
    end
  end
end
