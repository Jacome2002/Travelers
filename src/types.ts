export type ScreenTab = 'rescue' | 'pass' | 'maritime' | 'concierge' | 'guarantee';

export interface PlanOption {
  id: 'plan_a' | 'plan_b' | 'plan_c';
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  category: 'cultural' | 'wellness' | 'flexible';
  image: string;
  secondaryImage?: string;
  highlights: string[];
  schedule: string;
  duration: string;
  costLabel: string;
  realValueCOP: string;
  savingsCOP: string;
  logisticsText: string;
  idealFor: string;
  kidsFriendlyNote: string;
  includedList: string[];
}

export interface GuestInfo {
  name: string;
  party: string;
  partyDetails: string;
  hotel: string;
  originalTour: string;
  reservationId: string;
  originalDepartureTime: string;
}

export interface DriverInfo {
  name: string;
  phone: string;
  vehicle: string;
  plate: string;
  photoUrl: string;
  rating: number;
  estimatedArrivalMinutes: number;
  currentLocation: string;
}

export interface MaritimeStation {
  name: string;
  area: string;
  status: 'Cerrado' | 'Restringido' | 'Abierto';
  swellMeters: number;
  windKnots: number;
  windDirection: string;
  description: string;
}

export interface MaritimeBulletin {
  code: string;
  date: string;
  time: string;
  authority: string;
  source: string;
  level: 'Naranja' | 'Roja' | 'Amarilla';
  headline: string;
  summary: string;
  seaStateText: string;
  advisoryText: string;
}

export interface ChatMessage {
  id: string;
  sender: 'concierge' | 'user';
  text: string;
  timestamp: string;
}
