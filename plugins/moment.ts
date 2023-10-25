import moment from 'moment'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      timeAgo: (date: string) => {
        return moment(date).fromNow()
      },
      timeElapsed: (date: string) => {
        const duration = moment.duration(moment().diff(date));
      
        if (duration.asYears() >= 1) {
          const years = Math.floor(duration.asYears());
          return `${years} year${years !== 1 ? 's' : ''}`;
        } else if (duration.asDays() >= 1) {
          const days = Math.floor(duration.asDays());
          const formattedDays = days < 10 ? `0${days}` : days.toString();
          return `${formattedDays} day${days !== 1 ? 's' : ''}`;
        } else if (duration.asHours() >= 1) {
          const hours = Math.floor(duration.asHours());
          return `${hours} hour${hours !== 1 ? 's' : ''}`;
        } else if (duration.asMinutes() >= 1) {
          const minutes = Math.floor(duration.asMinutes());
          return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        } else {
          const seconds = Math.floor(duration.asSeconds());
          return `${seconds} second${seconds !== 1 ? 's' : ''}`;
        }
      }
    }
  }
})
