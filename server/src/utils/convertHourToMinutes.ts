export default function convertHourToMinutes(time: string) {
    const [
        hour,
        min
     ] = time.split(':').map(Number);
     
     return (hour * 60 + min);
}