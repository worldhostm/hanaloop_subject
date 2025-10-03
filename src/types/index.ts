export interface GhgEmission {
  yearMonth: string; // "2025-01", "2025-02", "2025-03"
  source: string; // gasoline, lpg, diesel, etc
  emissions: number; // tons of CO2 equivalent
}

export interface Company {
  id: string;
  name: string;
  country: string; // Country.code
  emissions: GhgEmission[];
}

export interface Post {
  id: string;
  title: string;
  resourceUid: string; // Company.id
  dateTime: string; // e.g., "2024-02"
  content: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface EmissionSummary {
  company: string;
  totalEmissions: number;
  averageEmissions: number;
  trend: 'up' | 'down' | 'stable';
}

export interface DashboardData {
  companies: Company[];
  posts: Post[];
  countries: Country[];
}