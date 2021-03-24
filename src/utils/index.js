import icon_mapping from '../mapping.json'

export const convert_to_icon = (description, sunrise, sunset) => {
  const d = new Date()
  const current_hour = d.getHours()
  const sunrise_hour = d.getHours(sunrise)
  const sunset_hour = d.getHours(sunset)

  if (current_hour > 0 && current_hour <= sunrise_hour) {
    return icon_mapping.night[description]
  } else if (current_hour > sunrise_hour && current_hour <= sunset_hour) {
    return icon_mapping.day[description]
  }
  return icon_mapping.neutral[description]


}
