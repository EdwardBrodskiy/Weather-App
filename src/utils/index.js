import icon_mapping from '../mapping.json'
import current_state from '../components/weather_info/index.js'

export const convert_to_icon = (description) => {
  var d = new Date()
  current_hour = d.getHours()
  sunrise_hour = getHours(data.city.sunrise())
  sunset_hour = getHours(data.city.sunset())
  if(current_hour>0 && current_hour<=sunrise_hour) {
    return 'night ${icon_mapping[current_state]'
  }
  else if(current_hour>sunrise_hour && current_hour<=sunset_hour) {
    return 'day ${icon_mapping[current_state]'
  }
  else if(current_hour>sunset_hour && current_hour<=0) {
    return 'neutral ${icon_mapping[current_state]'
  }
  return <css_icon_name>
}
