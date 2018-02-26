export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const convertTimeStamp = (seconds) => {
    const d = new Date(seconds * 1000); //convert to ms
    let hours = d.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // if hours is 0, change it to 12
    const displayHours = hours + ampm
    return `${displayHours}`;
}