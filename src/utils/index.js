import icon_mapping from '../mapping.json'

export const convert_to_icon = (description, sunrise, sunset, time) => {
  const date = new Date()
  if (time != undefined) {
    date.setTime(time * 1000)
  }
  const event_hour = date.getHours()

  date.setTime(sunrise * 1000)
  const sunrise_hour = date.getHours()

  date.setTime(sunset * 1000)
  const sunset_hour = date.getHours()

  if (sunrise_hour <= event_hour && event_hour <= sunset_hour) {
    return icon_mapping.day[description]
  } else if (23 <= event_hour || (0 <= event_hour && event_hour < 6)) {
    return icon_mapping.night[description]
  }
  return icon_mapping.neutral[description]


}
