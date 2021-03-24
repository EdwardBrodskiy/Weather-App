
export const convert_to_icon = (description) => {
  var d = new Date()
  current_hour = d.getHours()
  sunrise_hour = getHours(data.city.sunrise())
  sunset_hour = getHours(data.city.sunset())
  if(current_hour>0 && current_hour<=sunrise_hour) {
    return icon_mapping.night[description]
  }
  else if(current_hour>sunrise_hour && current_hour<=sunset_hour) {
    return icon_mapping.day[description]
  }
  else if(current_hour>sunset_hour && current_hour<=0) {
    return icon_mapping.neutral[description]
  }
}
