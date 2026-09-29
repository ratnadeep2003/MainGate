export interface Partner {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tag: string;
  domain: string;
  logo: string;
  roles: JobRole[];
}
//define shape

export interface JobRole {
  id: string;
  title: string;
  compensation: string;
  location: string;
  type: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
}