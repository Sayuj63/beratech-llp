export type ServiceGroup = {
  id: string;
  n: string;
  title: string;
  tagline: string;
  description: string;
  sub?: string;
  items: string[];
  image: string;
};

export const SERVICES: ServiceGroup[] = [
  {
    id: 'offshore',
    n: '01',
    title: 'Offshore Services',
    tagline: 'Below the waterline.',
    description:
      'Diver-led and ROV-assisted inspection, maintenance and intervention on rigs, jackets, risers, pipelines and marine structures.',
    sub: 'Underwater Services',
    items: [
      'Under Water Inspection (UWILD) for Jack-Up rigs, Jackets, Risers and other Offshore Platforms, Supply Vessels, Ships, Drill Ships and other Marine Vessels',
      'Underwater Video-graphic Inspection',
      'Underwater MPI / ACFM inspection (NDT)',
      'Inspection and Maintenance of Marine Structures (Jetties, SBMs, Pipelines etc.)',
      'Fish-net and Marine growth removal',
      'Anode Replacement',
      'ROV Services',
      'Project Management and Man Power Supply',
    ],
    image: '/images/projects/project-02.jpg',
  },
  {
    id: 'above-water',
    n: '02',
    title: 'Above Water Services',
    tagline: 'Topside, surfaces and structures.',
    description:
      'Structural and piping fabrication, rope-access execution, surface NDT, paint application and fire-fighting system overhauls.',
    items: [
      'Fabrication and Installation (Structural and Piping)',
      'Rope Access',
      'Surface NDT',
      'Rigging and Scaffolding',
      'Surface Preparational and Paint application',
      'Tank Cleaning',
      'Repair and Replacement of Chillers',
      'Fire Fighting Systems (R&R)',
    ],
    image: '/images/projects/project-06.jpg',
  },
  {
    id: 'onshore',
    n: '03',
    title: 'Onshore Services',
    tagline: 'Heavy civil & mechanical work.',
    description:
      'Jetty construction, pipeline and mechanical erection, residential and commercial civil works, and refinery shutdown campaigns.',
    items: [
      'Jetty Constructions and Inspection',
      'Fabrication and Installation of Pipelines',
      'Fabrication and Erection of Mechanical Structures',
      'Civil constructions of Residential and Commercial Spaces',
      'Refinery Expansion and Shutdown Jobs',
    ],
    image: '/images/projects/project-04.jpg',
  },
  {
    id: 'ship-repairs',
    n: '04',
    title: 'Ship Repairs',
    tagline: 'Full-scope vessel overhauls.',
    description:
      'Drydock and afloat ship repair — structural, mechanical and marine growth treatment, with hull surveys and ADEM coating.',
    items: [
      'Structural Refit',
      'Surface Preparation and Paint Application',
      'Hot Work Assistance',
      'Engine Repair and Refit',
      'Application of ADEM coating',
      'Tank Cleaning',
      'Insulation of Refrigerated and Non-Refer Compartments',
      'Anode Replacements',
      'Marine Growth Removal',
      'Hull Survey',
      'Sea chest and Hull cleaning',
      'Propellor Cleaning and Polishing',
      'Fishnet Removal',
      'Retubing of Heat Exchangers',
      'Repair and Replacement of Chillers',
      'Fire Fighting Systems (R&R)',
    ],
    image: '/images/projects/project-10.jpg',
  },
];
