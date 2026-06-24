import { Project } from './types';

export const iotIngestInfrastructure: Project = {
  slug: 'iot-ingest-infrastructure',
  title: 'IoT Data Ingest at Massive Scale',
  tagline: {
    en: 'Final degree thesis: an AWS pipeline that ingests telemetry from 100k+ IoT devices.',
    es: 'Trabajo de fin de grado: una tubería en AWS que ingiere telemetría de más de 100k dispositivos IoT.',
    ca: 'Treball de fi de grau: una canonada a AWS que ingereix telemetria de més de 100k dispositius IoT.',
  },
  tags: ['AWS', 'Kinesis', 'Elastic Beanstalk', 'DynamoDB', 'Lambda', 'CloudFormation', 'Python'],
  year: '2022',
  type: 'educational',
  links: {},
  description: {
    en: [
      'Final degree thesis (TFG) for the Degree in Digital Interaction and Computing Techniques (GTIDIC) at the Universitat de Lleida, based on a real product I built during a 9-month internship at a software consultancy (Engisoft) for an electric-fleet management client.',
      'The goal was to design and deploy a cloud-native infrastructure able to ingest and process telemetry from a fleet growing from ~10k to ~100k vehicles, each sending per-second, per-minute and multi-minute messages over HTTP and TCP (and MQTT in the future), with near-zero maintenance and fully automatic scaling.',
    ],
    es: [
      'Trabajo de fin de grado (TFG) del Grado en Técnicas de Interacción Digital y de Computación (GTIDIC) de la Universitat de Lleida, basado en un producto real que construí durante unas prácticas de 9 meses en una consultora de software (Engisoft) para un cliente de gestión de flotas eléctricas.',
      'El objetivo era diseñar y desplegar una infraestructura nativa de la nube capaz de ingerir y procesar la telemetría de una flota que crecía de ~10k a ~100k vehículos, cada uno enviando mensajes por segundo, por minuto y multiminuto a través de HTTP y TCP (y MQTT en el futuro), con un mantenimiento casi nulo y escalado totalmente automático.',
    ],
    ca: [
      'Treball de fi de grau (TFG) del Grau en Tècniques d’Interacció Digital i de Computació (GTIDIC) de la Universitat de Lleida, basat en un producte real que vaig construir durant unes pràctiques de 9 mesos en una consultora de programari (Engisoft) per a un client de gestió de flotes elèctriques.',
      'L’objectiu era dissenyar i desplegar una infraestructura nativa del núvol capaç d’ingerir i processar la telemetria d’una flota que creixia de ~10k a ~100k vehicles, cadascun enviant missatges per segon, per minut i multiminut a través d’HTTP i TCP (i MQTT en el futur), amb un manteniment gairebé nul i escalat totalment automàtic.',
    ],
  },
  highlights: {
    en: [
      'Messages received by an AWS Elastic Beanstalk cluster (auto-scaling EC2 behind a classic load balancer) running an nginx HTTP server and a custom Python TCP server, configured via .ebextensions with immutable deployments managed through S3 + CodePipeline across pre-production and production.',
      'Amazon Kinesis Data Streams ingest and buffer the three message types, while Kinesis Data Analytics (Apache Flink / Zeppelin notebooks) computes per-minute, 15-minute and hourly aggregations.',
      'Real-time reads served from Amazon ElastiCache (Redis, primary + replica); aggregations persisted to DynamoDB through Lambda; raw second-level data archived to S3 as Parquet via Kinesis Firehose and queried with Athena and a Glue crawler for the machine-learning team.',
      'The whole stack defined as Infrastructure as Code with AWS CloudFormation (and later Terraform), so spinning up a new subsidiary takes minutes instead of days; on-demand capacity was chosen over provisioned to absorb fleet growth without manual intervention.',
    ],
    es: [
      'Mensajes recibidos por un clúster de AWS Elastic Beanstalk (EC2 con autoescalado tras un load balancer clásico) que ejecuta un servidor HTTP nginx y un servidor TCP en Python a medida, configurado con .ebextensions y despliegues inmutables gestionados mediante S3 + CodePipeline entre preproducción y producción.',
      'Amazon Kinesis Data Streams ingiere y almacena temporalmente los tres tipos de mensaje, mientras que Kinesis Data Analytics (notebooks de Apache Flink / Zeppelin) calcula las agregaciones por minuto, de 15 minutos y por hora.',
      'Lecturas en tiempo real servidas desde Amazon ElastiCache (Redis, primario + réplica); agregaciones persistidas en DynamoDB mediante Lambda; datos brutos a nivel de segundo archivados en S3 como Parquet vía Kinesis Firehose y consultados con Athena y un crawler de Glue para el equipo de machine learning.',
      'Toda la pila definida como Infraestructura como Código con AWS CloudFormation (y más tarde Terraform), de modo que crear una nueva filial lleva minutos en lugar de días; se eligió capacidad on-demand frente a aprovisionada para absorber el crecimiento de la flota sin intervención manual.',
    ],
    ca: [
      'Missatges rebuts per un clúster d’AWS Elastic Beanstalk (EC2 amb autoescalat darrere d’un load balancer clàssic) que executa un servidor HTTP nginx i un servidor TCP en Python a mida, configurat amb .ebextensions i desplegaments immutables gestionats mitjançant S3 + CodePipeline entre preproducció i producció.',
      'Amazon Kinesis Data Streams ingereix i emmagatzema temporalment els tres tipus de missatge, mentre que Kinesis Data Analytics (notebooks d’Apache Flink / Zeppelin) calcula les agregacions per minut, de 15 minuts i per hora.',
      'Lectures en temps real servides des d’Amazon ElastiCache (Redis, primari + rèplica); agregacions persistides a DynamoDB mitjançant Lambda; dades en brut a nivell de segon arxivades a S3 com a Parquet via Kinesis Firehose i consultades amb Athena i un crawler de Glue per a l’equip de machine learning.',
      'Tota la pila definida com a Infraestructura com a Codi amb AWS CloudFormation (i més tard Terraform), de manera que crear una nova filial triga minuts en lloc de dies; es va triar capacitat on-demand davant de l’aprovisionada per absorbir el creixement de la flota sense intervenció manual.',
    ],
  },
};
