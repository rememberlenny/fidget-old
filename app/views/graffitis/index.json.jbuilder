json.array!(@graffitis) do |graffiti|
  json.extract! graffiti, :id, :image_id, :image_url, :user, :source, :date_published, :post_id
  json.url graffiti_url(graffiti, format: :json)
end
