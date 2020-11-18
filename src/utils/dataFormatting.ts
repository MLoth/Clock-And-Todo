export const addPaddingZeros = (time: number) => time.toString().padStart(2, '0');

export const getKeyofCurrentDay = (day: number): string => {
	const days = [
		"SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"
	]
	return days[day]
}

export const getKeyofCurrentMonth = (month: number): string => {
	const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
	return months[month]
}
