export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  category: string;
  description: string;
  imageUrl: string;
  region: string;
  highlights: string[];
  itinerary: { day: string; title: string; detail: string }[];
  paxRange?: string;
  bestSeason?: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  role: string;
  executive: string;
  title: string;
  pax: number;
  location: string;
  quote: string;
  metrics: string[];
  challenge: string;
  solution: string;
}

export interface InquiryFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  journeyType: 'corporate' | 'leisure';
  scope: string;
  paxCount?: string;
  targetDates?: string;
  preferredRegion?: string;
}

export interface InquiryRecord extends InquiryFormData {
  id: string;
  timestamp: string;
  status: 'Received' | 'Assigned to Principal' | 'Proposal in Preparation' | 'Dispatched';
}
