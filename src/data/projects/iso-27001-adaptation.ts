import { Project } from './types';

export const iso27001Adaptation: Project = {
  slug: 'iso-27001-adaptation',
  title: 'ISO 27001 Infrastructure Adaptation',
  tagline: {
    en: 'Retiring, migrating and hardening a corporate estate to meet ISO 27001 — private-only access and immutable backups.',
    es: 'Retirar, migrar y fortificar un parque corporativo para cumplir la ISO 27001: acceso solo privado y copias inmutables.',
    ca: 'Retirar, migrar i fortificar un parc corporatiu per complir la ISO 27001: accés només privat i còpies immutables.',
  },
  tags: ['ISO 27001', 'AWS', 'Site-to-Site VPN', 'VPC', 'EC2', 'AWS Backup', 'Systems Manager', 'S3'],
  year: '2026',
  type: 'work',
  links: {},
  description: {
    en: [
      'Infrastructure work supporting the ongoing ISO 27001 certification of the company I work for: taking a corporate estate grown organically over years — an ageing server rack, a mix of on-prem virtual machines and a long tail of end-user hardware — and reshaping it to meet what the standard expects around asset control, access control and information backup. The certification is still in progress; my part of it is the technical side.',
      'The estate was split three ways. Eight virtual machines and internal servers were migrated to EC2 inside a new private VPC; around ten had to stay on premises because they depend on software too old to migrate — an obsolete toolchain still used to compile an old programming framework for testing (new builds already run in the cloud) and a UniFi OS server that has to keep working locally even if the link to AWS goes down. Everything else — roughly ten servers marked for decommissioning, a full rack of old hardware and 25–30 obsolete laptops and desktops — was retired.',
      'The machines that stayed were not left as they were: their hosts were out of support, so I prepared fresh hosts with an up-to-date host OS and VirtualBox and migrated the VMs onto them. Nothing inside the new VPC has a public IP — the only way in is a redundant IPsec Site-to-Site VPN from the office — and the old hand-rolled backup routine was replaced by AWS Backup with immutable vaults on the cloud side and Systems Manager + S3 for what remains on-prem.',
    ],
    es: [
      'Trabajo de infraestructura en apoyo de la certificación ISO 27001 en curso de la empresa en la que trabajo: coger un parque corporativo crecido de forma orgánica durante años —un rack de servidores envejecido, una mezcla de máquinas virtuales on-premise y una larga cola de equipos de usuario— y remodelarlo para que cumpla lo que la norma espera en control de activos, control de accesos y copias de seguridad. La certificación sigue en curso; mi parte es la técnica.',
      'El parque se dividió en tres. Ocho máquinas virtuales y servidores internos se migraron a EC2 dentro de una nueva VPC privada; una decena tuvo que quedarse en local porque depende de software demasiado antiguo para migrarlo: una cadena de herramientas obsoleta que todavía se usa para compilar un antiguo framework de programación con fines de prueba (las versiones nuevas ya se ejecutan en la nube) y un servidor UniFi OS que debe seguir funcionando en local aunque caiga el enlace con AWS. Todo lo demás —alrededor de diez servidores marcados para retirada, un rack completo de hardware antiguo y entre 25 y 30 portátiles y sobremesas obsoletos— se retiró.',
      'Las máquinas que se quedaron no se dejaron como estaban: sus anfitriones estaban fuera de soporte, así que preparé hosts nuevos con el sistema operativo anfitrión y VirtualBox actualizados y migré las VMs a ellos. Nada dentro de la nueva VPC tiene IP pública —la única vía de entrada es una VPN IPsec Site-to-Site redundante desde la oficina— y la vieja rutina de copias hecha a mano se sustituyó por AWS Backup con vaults inmutables en la parte cloud y Systems Manager + S3 para lo que permanece on-premise.',
    ],
    ca: [
      'Feina d’infraestructura en suport de la certificació ISO 27001 en curs de l’empresa on treballo: agafar un parc corporatiu crescut de manera orgànica durant anys —un rack de servidors envellit, una barreja de màquines virtuals on-premise i una llarga cua d’equips d’usuari— i remodelar-lo perquè compleixi el que la norma espera en control d’actius, control d’accessos i còpies de seguretat. La certificació encara està en curs; la meva part és la tècnica.',
      'El parc es va dividir en tres. Vuit màquines virtuals i servidors interns es van migrar a EC2 dins d’una nova VPC privada; una desena es van haver de quedar en local perquè depenen de programari massa antic per migrar-lo: una cadena d’eines obsoleta que encara es fa servir per compilar un antic framework de programació amb finalitats de prova (les versions noves ja s’executen al núvol) i un servidor UniFi OS que ha de continuar funcionant en local encara que caigui l’enllaç amb AWS. Tota la resta —una desena de servidors marcats per retirar, un rack sencer de maquinari antic i entre 25 i 30 portàtils i sobretaules obsolets— es va retirar.',
      'Les màquines que es van quedar no es van deixar tal com estaven: els seus amfitrions estaven fora de suport, així que vaig preparar hosts nous amb el sistema operatiu amfitrió i el VirtualBox actualitzats i hi vaig migrar les VMs. Res dins de la nova VPC no té IP pública —l’única via d’entrada és una VPN IPsec Site-to-Site redundant des de l’oficina— i la vella rutina de còpies feta a mà es va substituir per AWS Backup amb vaults immutables a la part cloud i Systems Manager + S3 per al que queda on-premise.',
    ],
  },
  highlights: {
    en: [
      'Estate reduction: a full rack of legacy servers, around ten servers marked for decommissioning and 25–30 obsolete laptops and desktops taken out of service — shrinking both the hardware footprint and the number of systems that have to be inventoried, patched and audited.',
      'Migration to AWS: eight virtual machines and internal servers rehosted on EC2 in a purpose-built private VPC, with no public IP addresses anywhere in it.',
      'On-prem refresh: the ~10 systems that could not move — a legacy toolchain that still compiles an old programming framework for testing, plus the UniFi OS server, kept local so network management survives a VPN outage — were rebuilt onto freshly prepared hosts with an updated host OS and VirtualBox instead of being left on unsupported ones.',
      'Private-only connectivity: internal resources are reachable exclusively over IPsec Site-to-Site VPN, doubled for resilience — one VPN connection per ISP, each running both of its AWS tunnels, so four tunnels are up at all times.',
      'Backup modernization, cloud side: AWS Backup plans for the EC2 workloads, with KMS-encrypted recovery points held in a Vault Lock vault so backups cannot be altered or deleted, administrators included.',
      'Backup modernization, on-prem side: the remaining machines back up through AWS Systems Manager into S3 under lifecycle policies that tier and expire the data; being non-critical they sit outside the locked vault for now, with vaulting under evaluation.',
      'ISO 27001 evidence: an asset inventory covering the surviving estate — an audit requirement in its own right, and what made the retirement and migration decisions defensible.',
    ],
    es: [
      'Reducción del parque: un rack completo de servidores heredados, alrededor de diez servidores marcados para retirada y entre 25 y 30 portátiles y sobremesas obsoletos dados de baja, reduciendo tanto la huella de hardware como el número de sistemas que hay que inventariar, parchear y auditar.',
      'Migración a AWS: ocho máquinas virtuales y servidores internos rehospedados en EC2 dentro de una VPC privada creada a tal efecto, sin ninguna dirección IP pública.',
      'Renovación on-premise: los ~10 sistemas que no podían moverse —una cadena de herramientas heredada que aún compila un antiguo framework de programación para pruebas, más el servidor UniFi OS, que se queda en local para que la gestión de red sobreviva a una caída de la VPN— se reconstruyeron sobre hosts recién preparados con el sistema operativo anfitrión y VirtualBox actualizados, en lugar de dejarlos sobre anfitriones sin soporte.',
      'Conectividad solo privada: los recursos internos son accesibles exclusivamente a través de VPN IPsec Site-to-Site, duplicada para dar resiliencia: una conexión VPN por cada ISP, cada una con sus dos túneles de AWS activos, de modo que siempre hay cuatro túneles levantados.',
      'Modernización de copias, lado cloud: planes de AWS Backup para las cargas en EC2, con puntos de recuperación cifrados con KMS guardados en un vault con Vault Lock, de forma que las copias no se pueden alterar ni borrar, ni siquiera por un administrador.',
      'Modernización de copias, lado on-premise: las máquinas restantes se respaldan mediante AWS Systems Manager hacia S3 bajo políticas de ciclo de vida que escalonan y caducan los datos; al no ser críticas quedan de momento fuera del vault bloqueado, con esa opción en estudio.',
      'Evidencia para ISO 27001: un inventario de activos que cubre el parque superviviente, requisito de auditoría por sí mismo y lo que hizo defendibles las decisiones de retirada y migración.',
    ],
    ca: [
      'Reducció del parc: un rack sencer de servidors heretats, una desena de servidors marcats per retirar i entre 25 i 30 portàtils i sobretaules obsolets donats de baixa, reduint tant la petjada de maquinari com el nombre de sistemes que cal inventariar, apedaçar i auditar.',
      'Migració a AWS: vuit màquines virtuals i servidors interns rehostatjats a EC2 dins d’una VPC privada creada a aquest efecte, sense cap adreça IP pública.',
      'Renovació on-premise: els ~10 sistemes que no es podien moure —una cadena d’eines heretada que encara compila un antic framework de programació per a proves, més el servidor UniFi OS, que es queda en local perquè la gestió de xarxa sobrevisqui a una caiguda de la VPN— es van reconstruir sobre hosts acabats de preparar amb el sistema operatiu amfitrió i el VirtualBox actualitzats, en lloc de deixar-los sobre amfitrions sense suport.',
      'Connectivitat només privada: els recursos interns són accessibles exclusivament a través de VPN IPsec Site-to-Site, duplicada per donar resiliència: una connexió VPN per cada ISP, cadascuna amb els seus dos túnels d’AWS actius, de manera que sempre hi ha quatre túnels aixecats.',
      'Modernització de còpies, banda cloud: plans d’AWS Backup per a les càrregues a EC2, amb punts de recuperació xifrats amb KMS guardats en un vault amb Vault Lock, de manera que les còpies no es poden alterar ni esborrar, ni tan sols per un administrador.',
      'Modernització de còpies, banda on-premise: les màquines restants es guarden mitjançant AWS Systems Manager cap a S3 sota polítiques de cicle de vida que esglaonen i caduquen les dades; com que no són crítiques queden de moment fora del vault bloquejat, amb aquesta opció en estudi.',
      'Evidència per a la ISO 27001: un inventari d’actius que cobreix el parc supervivent, requisit d’auditoria per si mateix i el que va fer defensables les decisions de retirada i migració.',
    ],
  },
};
