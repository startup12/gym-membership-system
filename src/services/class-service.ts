import { GymClass } from "@/types/classes"

const MOCK_CLASSES: GymClass[] = [
  {
    id: "cls-001",
    name: "Morning Strength",
    trainer: "Kofi Mensah",
    day: "Monday",
    time: "06:00",
    duration: 60,
    category: "Strength",
    capacity: 20,
    enrolled: 14,
  },
  {
    id: "cls-002",
    name: "HIIT Blast",
    trainer: "Ama Asante",
    day: "Tuesday",
    time: "17:00",
    duration: 45,
    category: "HIIT",
    capacity: 15,
    enrolled: 13,
  },
  {
    id: "cls-003",
    name: "Evening Cardio",
    trainer: "Kwame Boateng",
    day: "Wednesday",
    time: "18:00",
    duration: 50,
    category: "Cardio",
    capacity: 25,
    enrolled: 10,
  },
  {
    id: "cls-004",
    name: "Yoga Flow",
    trainer: "Abena Osei",
    day: "Thursday",
    time: "07:00",
    duration: 60,
    category: "Yoga",
    capacity: 12,
    enrolled: 12,
  },
  {
    id: "cls-005",
    name: "Power Lifting",
    trainer: "Kofi Mensah",
    day: "Friday",
    time: "06:30",
    duration: 75,
    category: "Strength",
    capacity: 10,
    enrolled: 6,
  },
  {
    id: "cls-006",
    name: "Weekend Wellness",
    trainer: "Abena Osei",
    day: "Saturday",
    time: "09:00",
    duration: 60,
    category: "Wellness",
    capacity: 15,
    enrolled: 8,
  },
]

export const fetchAllClasses = async (): Promise<GymClass[]> => {
  await new Promise((r) => setTimeout(r, 1000))
  return MOCK_CLASSES
}

export const fetchClassById = async (id: string): Promise<GymClass | undefined> => {
  await new Promise((r) => setTimeout(r, 500))
  return MOCK_CLASSES.find((c) => c.id === id)
}