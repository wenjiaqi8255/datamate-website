export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapItem {
  title: string;
  description: string;
  status: 'now' | 'next' | 'vision';
}

export interface ContactMethod {
  platform: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
}