import { Company, Post, Country } from '@/types';

export const countries: Country[] = [
  { code: 'US', name: 'United States' },
  { code: 'DE', name: 'Germany' },
  { code: 'JP', name: 'Japan' },
  { code: 'CN', name: 'China' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'FR', name: 'France' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
];

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'Acme Corp',
    country: 'US',
    emissions: [
      { yearMonth: '2024-01', source: 'gasoline', emissions: 120 },
      { yearMonth: '2024-02', source: 'gasoline', emissions: 110 },
      { yearMonth: '2024-03', source: 'gasoline', emissions: 95 },
      { yearMonth: '2024-04', source: 'diesel', emissions: 105 },
      { yearMonth: '2024-05', source: 'diesel', emissions: 115 },
      { yearMonth: '2024-06', source: 'lpg', emissions: 88 },
    ]
  },
  {
    id: 'c2',
    name: 'Globex Industries',
    country: 'DE',
    emissions: [
      { yearMonth: '2024-01', source: 'gasoline', emissions: 80 },
      { yearMonth: '2024-02', source: 'gasoline', emissions: 105 },
      { yearMonth: '2024-03', source: 'diesel', emissions: 120 },
      { yearMonth: '2024-04', source: 'diesel', emissions: 98 },
      { yearMonth: '2024-05', source: 'lpg', emissions: 112 },
      { yearMonth: '2024-06', source: 'lpg', emissions: 125 },
    ]
  },
  {
    id: 'c3',
    name: 'TechnoGreen Ltd',
    country: 'JP',
    emissions: [
      { yearMonth: '2024-01', source: 'gasoline', emissions: 65 },
      { yearMonth: '2024-02', source: 'gasoline', emissions: 70 },
      { yearMonth: '2024-03', source: 'diesel', emissions: 55 },
      { yearMonth: '2024-04', source: 'diesel', emissions: 60 },
      { yearMonth: '2024-05', source: 'lpg', emissions: 58 },
      { yearMonth: '2024-06', source: 'lpg', emissions: 52 },
    ]
  },
  {
    id: 'c4',
    name: 'MegaCorp Solutions',
    country: 'CN',
    emissions: [
      { yearMonth: '2024-01', source: 'diesel', emissions: 150 },
      { yearMonth: '2024-02', source: 'diesel', emissions: 145 },
      { yearMonth: '2024-03', source: 'gasoline', emissions: 160 },
      { yearMonth: '2024-04', source: 'gasoline', emissions: 155 },
      { yearMonth: '2024-05', source: 'lpg', emissions: 140 },
      { yearMonth: '2024-06', source: 'lpg', emissions: 135 },
    ]
  },
  {
    id: 'c5',
    name: 'EcoFriendly Co',
    country: 'UK',
    emissions: [
      { yearMonth: '2024-01', source: 'lpg', emissions: 45 },
      { yearMonth: '2024-02', source: 'lpg', emissions: 42 },
      { yearMonth: '2024-03', source: 'gasoline', emissions: 38 },
      { yearMonth: '2024-04', source: 'gasoline', emissions: 35 },
      { yearMonth: '2024-05', source: 'diesel', emissions: 40 },
      { yearMonth: '2024-06', source: 'diesel', emissions: 37 },
    ]
  },
  {
    id: 'c6',
    name: 'InnovateNow Inc',
    country: 'FR',
    emissions: [
      { yearMonth: '2024-01', source: 'gasoline', emissions: 92 },
      { yearMonth: '2024-02', source: 'gasoline', emissions: 88 },
      { yearMonth: '2024-03', source: 'diesel', emissions: 95 },
      { yearMonth: '2024-04', source: 'diesel', emissions: 90 },
      { yearMonth: '2024-05', source: 'lpg', emissions: 85 },
      { yearMonth: '2024-06', source: 'lpg', emissions: 82 },
    ]
  }
];

export const posts: Post[] = [
  {
    id: 'p1',
    title: 'Q1 Sustainability Report',
    resourceUid: 'c1',
    dateTime: '2024-02',
    content: 'Our Q1 emissions have decreased by 8% compared to previous quarter, primarily due to improved fuel efficiency measures.'
  },
  {
    id: 'p2',
    title: 'Carbon Reduction Initiative Launch',
    resourceUid: 'c2',
    dateTime: '2024-03',
    content: 'Globex Industries announces new carbon reduction initiative targeting 25% emissions reduction by end of 2024.'
  },
  {
    id: 'p3',
    title: 'Green Technology Investment',
    resourceUid: 'c3',
    dateTime: '2024-04',
    content: 'TechnoGreen Ltd invests $2M in renewable energy infrastructure to reduce carbon footprint.'
  },
  {
    id: 'p4',
    title: 'Quarterly Environmental Update',
    resourceUid: 'c4',
    dateTime: '2024-05',
    content: 'MegaCorp continues to optimize operations with focus on sustainable practices and emission monitoring.'
  },
  {
    id: 'p5',
    title: 'Carbon Neutral Achievement',
    resourceUid: 'c5',
    dateTime: '2024-06',
    content: 'EcoFriendly Co achieves carbon neutral status for Q2 operations through offset programs and efficiency improvements.'
  },
  {
    id: 'p6',
    title: 'Innovation in Clean Energy',
    resourceUid: 'c6',
    dateTime: '2024-05',
    content: 'InnovateNow Inc partners with clean energy providers to reduce dependency on fossil fuels.'
  }
];