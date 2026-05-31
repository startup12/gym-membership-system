export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  specializations: string[];
  certifications: string[];
  schedule: string[];
  photoUrl: string;
  instagramHandle?: string;
}