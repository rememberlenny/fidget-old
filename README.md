![Location Gif](https://raw.githubusercontent.com/rememberlenny/map-track-rails/master/app/assets/images/location.gif)

#tanqueray: Real-time Collaborative Maps

Repository: https://github.com/rememberlenny/map-track-rails

Current: http://tanqueray.herokuapp.com/pages/map_high


##Description
This google docs for maps.

This uses Firebase as a distributed database. The points added to a map will appear for anyone viewing the map. Eventually, users will be able to have a unique URL for the map they want to look at/share.

##External

This uses Mapbox and Firebase.

## Future

- add interval to event to add new tag
- create search for current tags

- create hook to google docs [with rails](https://developers.google.com/gdata/articles/gdata_on_rails)
- create faceted filter for displayed tags
  - [Filtering Markers](https://www.mapbox.com/mapbox.js/example/v1.0.0/filtering-markers/)
  - [Multiple Marker Filters](https://www.mapbox.com/mapbox.js/example/v1.0.0/multiple-marker-filters/)
- create UI for designing the inside of boxes
- have multiple icon types
- create "get my current location" [HTML 5 Current Location](https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation)
- add "find nearby"  [Geocoder](http://railscasts.com/episodes/273-geocoder)
- type address to get geocords [Typeahead Address Picker](https://github.com/sgruhier/typeahead-addresspicker)
- combine Geocoder and Mapbox [Blog post](http://vladigleba.com/blog/2013/11/14/using-mapbox-with-ruby-on-rails/)
