class Graffiti < ActiveRecord::Base
  def self.import(file)
    @file = file.tempfile
    SmarterCSV.process(@file, {:chunk_size => 100, :quote_char => "\x00"}, :key_mapping => {
        :image_id       =>:image_id,
        :image_url      =>:image_url,
        :user           =>:user,
        :source         =>'12ozprophet',
        :date_published =>:date_published,
        :post_id        =>:post_id
      }) do |chunk|
      chunk.each do |row|
        Graffiti.create(row)
      end
    end
  end
end
