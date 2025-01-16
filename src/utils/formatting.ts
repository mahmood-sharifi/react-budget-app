const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
};

export const listTextFormate = (source: string,value:number, date: string) => {
    return `${source}: ${value} EUR on ${" "} ${new Date(date).toLocaleDateString("en-US", options)}`
}