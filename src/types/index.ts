export interface ProductItem {
  id: string;
  title: string;
  tag: string;
  calibers: string;
  description: string;
  image: string;
  badge: string;
  quoteTitle: string;
}

export interface CapabilityItem {
  id: number;
  title: string;
  description: string;
}

export interface StoryItem {
  id: string;
  company: string;
  location: string;
  sector: string;
  image: string;
  quote: string;
  resultLabel: string;
  resultValue: string;
}

export interface MetricItem {
  id: string;
  prefix?: string;
  target: number;
  suffix: string;
  description: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  calibers: string;
  description: string;
  image: string;
  category: string;
  material: string;
}

