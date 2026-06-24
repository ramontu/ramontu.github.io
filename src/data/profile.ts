export const profile = {
  name: 'Ramon Trilla Urteaga',
  handle: 'ramontu',
  host: 'cloud',
  role: 'Cloud / Platform Architect',
  company: 'ENGISOFT',
  location: 'Igualada, Catalonia, Spain',
  taglines: [
    'I design and build AWS infrastructure.',
    'I write the Python that makes it run.',
    'Not afraid to try new things.',
  ],
  // Short one-liner shown under the name on the home screen.
  summary:
    'Platform Architect designing and implementing AWS-based infrastructure and writing the Python that powers it.',
  // Full "about" — translated from the original profile, edit freely.
  about: [
    "I'm someone who isn't afraid to try new things and who enjoys finding solutions to problems, no matter how uphill they get.",
    'Right now my work is best described as Platform Architect: I design and implement AWS-based infrastructure and program the functionality it needs to run, in Python.',
  ],
  links: {
    github: 'https://github.com/ramontu',
    linkedin: 'https://www.linkedin.com/in/ramon-trilla-urteaga/',
    email: 'ramontu2001@gmail.com',
  },
};

export type Profile = typeof profile;
