export interface GymClass {
  id: string
  name: string
  trainer: string
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
  time: string      // "HH:mm" 24-hour format
  duration: number  // minutes
  category: "Strength" | "Cardio" | "HIIT" | "Yoga" | "Wellness"
  capacity: number
  enrolled: number
}