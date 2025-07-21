// src/utils/dateUtils.ts
export const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// src/utils/dateUtils.ts
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  if (seconds < 60) return "just now";
  
  let counter: number;
  if (seconds >= intervals.year) {
    counter = Math.floor(seconds / intervals.year);
    return counter === 1 ? "1 year ago" : `${counter} years ago`;
  }
  if (seconds >= intervals.month) {
    counter = Math.floor(seconds / intervals.month);
    return counter === 1 ? "1 month ago" : `${counter} months ago`;
  }
  if (seconds >= intervals.week) {
    counter = Math.floor(seconds / intervals.week);
    return counter === 1 ? "1 week ago" : `${counter} weeks ago`;
  }
  if (seconds >= intervals.day) {
    counter = Math.floor(seconds / intervals.day);
    return counter === 1 ? "1 day ago" : `${counter} days ago`;
  }
  if (seconds >= intervals.hour) {
    counter = Math.floor(seconds / intervals.hour);
    return counter === 1 ? "1 hour ago" : `${counter} hours ago`;
  }
  if (seconds >= intervals.minute) {
    counter = Math.floor(seconds / intervals.minute);
    return counter === 1 ? "1 minute ago" : `${counter} minutes ago`;
  }
  
  return "just now";
}