import { Project } from './types';
import { thisSite } from './this-site';
import { iso27001Adaptation } from './iso-27001-adaptation';
import { awsOrganizationGovernance } from './aws-organization-governance';
import { iotIngestInfrastructure } from './iot-ingest-infrastructure';

export type { Project } from './types';

// ---------------------------------------------------------------------------
// To add a project: create a new file in this folder exporting a `Project`,
// then import it here and drop it into the array below. Order is the order
// shown on the site (newest / most relevant first).
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  thisSite,
  iso27001Adaptation,
  awsOrganizationGovernance,
  iotIngestInfrastructure,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
