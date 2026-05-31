export type ClassCategory =
  | "Strength"
  | "Cardio"
  | "HIIT"
  | "Yoga"
  | "Wellness";

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface GymClass {
  id: string;
  title: string;
  category: ClassCategory;
  day: DayOfWeek;
  startTime: string;
  durationMinutes: number;
  trainer: string;
  trainerId: string;
  enrolled: number;
  capacity: number;
  description: string;
}

export interface ClassBooking {
  classId: string;
  className: string;
  day: DayOfWeek;
  startTime: string;
}