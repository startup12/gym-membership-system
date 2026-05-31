export function formatGHS(amount: number): string {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatTime(time: string): string {
  const [hourStr, minuteStr] = time.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = minuteStr ?? "00";
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${displayHour}:${minute} ${period}`;
}

export function capacityPercent(enrolled: number, capacity: number): number {
  if (capacity === 0) return 100;
  return Math.min(Math.round((enrolled / capacity) * 100), 100);
}

export function capacityLabel(enrolled: number, capacity: number): string {
  if (enrolled >= capacity) return "Class Full";
  const spotsLeft = capacity - enrolled;
  if (spotsLeft <= 5) return `${spotsLeft} spot${spotsLeft === 1 ? "" : "s"} left`;
  return `${enrolled}/${capacity} filled`;
}

export function isClassFull(enrolled: number, capacity: number): boolean {
  return enrolled >= capacity;
}