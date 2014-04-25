json.array!(@scaffolds) do |scaffold|
  json.extract! scaffold, :id, :word, :number
  json.url scaffold_url(scaffold, format: :json)
end
