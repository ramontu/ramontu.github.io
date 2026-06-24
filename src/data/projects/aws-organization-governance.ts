import { Project } from './types';

export const awsOrganizationGovernance: Project = {
  slug: 'aws-organization-governance',
  title: 'AWS Organization Governance & Security',
  tagline: {
    en: 'Final degree thesis: a governance framework hardening 25 AWS accounts after two real breaches.',
    es: 'Trabajo de fin de grado: un marco de gobierno que fortifica 25 cuentas de AWS tras dos brechas reales.',
    ca: 'Treball de fi de grau: un marc de govern que fortifica 25 comptes d’AWS després de dues bretxes reals.',
  },
  tags: ['AWS', 'Control Tower', 'IAM Identity Center', 'SCP', 'GuardDuty', 'Security Hub'],
  year: '2026',
  type: 'educational',
  links: {},
  description: {
    en: [
      'Final degree thesis (TFG) for the Degree in Computer Engineering at the Universitat de Lleida, based on my work as a Cloud Architect at Engisoft securing the multi-account AWS estate of an international hotel chain and its sub-companies (~25 accounts, $150k–$200k monthly spend).',
      'It was triggered by two real security incidents: a ransomware attack that reached an EC2 instance through a Security Group exposing SSH to the internet, and an AWS credential theft via a leaked WordPress configuration file. The work designs and incrementally rolls out a comprehensive governance and security framework across the whole organization with zero production incidents over seven months.',
    ],
    es: [
      'Trabajo de fin de grado (TFG) del Grado en Ingeniería Informática de la Universitat de Lleida, basado en mi trabajo como Cloud Architect en Engisoft asegurando el entorno multicuenta de AWS de una cadena hotelera internacional y sus subempresas (~25 cuentas, gasto mensual de 150k–200k $).',
      'Surgió a raíz de dos incidentes de seguridad reales: un ataque de ransomware que alcanzó una instancia EC2 a través de un Security Group que exponía SSH a internet, y un robo de credenciales de AWS mediante un archivo de configuración de WordPress filtrado. El trabajo diseña y despliega de forma incremental un marco integral de gobierno y seguridad en toda la organización, sin un solo incidente en producción durante siete meses.',
    ],
    ca: [
      'Treball de fi de grau (TFG) del Grau en Enginyeria Informàtica de la Universitat de Lleida, basat en la meva feina com a Cloud Architect a Engisoft assegurant l’entorn multicompte d’AWS d’una cadena hotelera internacional i les seves subempreses (~25 comptes, despesa mensual de 150k–200k $).',
      'Va sorgir arran de dos incidents de seguretat reals: un atac de ransomware que va arribar a una instància EC2 a través d’un Security Group que exposava SSH a internet, i un robatori de credencials d’AWS mitjançant un fitxer de configuració de WordPress filtrat. El treball dissenya i desplega de manera incremental un marc integral de govern i seguretat a tota l’organització, sense cap incident en producció durant set mesos.',
    ],
  },
  highlights: {
    en: [
      'Multi-account foundation on AWS Organizations + Control Tower: a five-level OU tree (Security, Workloads Prod/Non-Prod, Exceptions, Sandbox, Suspended, PolicyStaging), a deliberately thin Management Account, and transversal Log Archive and Audit accounts.',
      'Preventive controls through deny-list Service Control Policies: DenySecurityDisabling, DenyRootActions, EnforceIMDSv2, DenyIAMConsoleUsers, DenyPublicS3Unblock, RegionRestriction and DenyPrivEscalation.',
      'Federated identity with IAM Identity Center integrated into Microsoft Entra ID (SAML 2.0 + SCIM), replacing long-lived IAM users with standardized permission sets, break-glass accounts and cross-account roles for external providers.',
      'Detective controls: an organization CloudTrail (SSE-KMS, S3 Object Lock 7-year WORM, log validation, Insights), GuardDuty + Security Hub (FSBP + CIS v3.0) aggregated in the Audit account, AWS Config rules, VPC Flow Logs and 366-day log retention.',
      'Infrastructure hardening: Security Group remediation with SSM Session Manager instead of SSH, S3 Block Public Access, Secrets Manager with rotation, IAM execution roles for compute, AWS WAF (OWASP Top 10) and Amazon SES — all deployed as Infrastructure as Code via CloudFormation StackSets.',
    ],
    es: [
      'Base multicuenta sobre AWS Organizations + Control Tower: un árbol de OUs de cinco niveles (Security, Workloads Prod/Non-Prod, Exceptions, Sandbox, Suspended, PolicyStaging), una Management Account deliberadamente mínima y cuentas transversales de Log Archive y Audit.',
      'Controles preventivos mediante Service Control Policies de tipo deny-list: DenySecurityDisabling, DenyRootActions, EnforceIMDSv2, DenyIAMConsoleUsers, DenyPublicS3Unblock, RegionRestriction y DenyPrivEscalation.',
      'Identidad federada con IAM Identity Center integrado en Microsoft Entra ID (SAML 2.0 + SCIM), sustituyendo los usuarios IAM de larga duración por permission sets estandarizados, cuentas break-glass y roles entre cuentas para proveedores externos.',
      'Controles de detección: un CloudTrail de organización (SSE-KMS, S3 Object Lock WORM a 7 años, validación de logs, Insights), GuardDuty + Security Hub (FSBP + CIS v3.0) agregados en la cuenta Audit, reglas de AWS Config, VPC Flow Logs y retención de logs de 366 días.',
      'Fortificación de la infraestructura: remediación de Security Groups con SSM Session Manager en lugar de SSH, S3 Block Public Access, Secrets Manager con rotación, roles de ejecución IAM para el cómputo, AWS WAF (OWASP Top 10) y Amazon SES, todo desplegado como Infraestructura como Código con CloudFormation StackSets.',
    ],
    ca: [
      'Base multicompte sobre AWS Organizations + Control Tower: un arbre d’OUs de cinc nivells (Security, Workloads Prod/Non-Prod, Exceptions, Sandbox, Suspended, PolicyStaging), una Management Account deliberadament mínima i comptes transversals de Log Archive i Audit.',
      'Controls preventius mitjançant Service Control Policies de tipus deny-list: DenySecurityDisabling, DenyRootActions, EnforceIMDSv2, DenyIAMConsoleUsers, DenyPublicS3Unblock, RegionRestriction i DenyPrivEscalation.',
      'Identitat federada amb IAM Identity Center integrat a Microsoft Entra ID (SAML 2.0 + SCIM), substituint els usuaris IAM de llarga durada per permission sets estandarditzats, comptes break-glass i rols entre comptes per a proveïdors externs.',
      'Controls de detecció: un CloudTrail d’organització (SSE-KMS, S3 Object Lock WORM a 7 anys, validació de logs, Insights), GuardDuty + Security Hub (FSBP + CIS v3.0) agregats al compte Audit, regles d’AWS Config, VPC Flow Logs i retenció de logs de 366 dies.',
      'Fortificació de la infraestructura: remediació de Security Groups amb SSM Session Manager en lloc de SSH, S3 Block Public Access, Secrets Manager amb rotació, rols d’execució IAM per al còmput, AWS WAF (OWASP Top 10) i Amazon SES, tot desplegat com a Infraestructura com a Codi amb CloudFormation StackSets.',
    ],
  },
};
