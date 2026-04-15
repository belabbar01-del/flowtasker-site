import type { NavItem, Service, Step, PricingPlan, FAQItem } from './types'

export const SITE_NAME = 'Flowtasker'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flowtasker.com'
export const SITE_EMAIL = 'belabbar01@gmail.com'
export const SITE_DESCRIPTION =
  "Flowtasker automatise vos tâches répétitives, connecte vos outils et fluidifie vos opérations grâce à des workflows n8n sur mesure — pour que vous puissiez vous concentrer sur ce qui compte vraiment."

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Comment ça marche', href: '/comment-ca-marche' },
  { label: 'Sécurité', href: '/securite' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES: Service[] = [
  {
    icon: 'FileText',
    title: 'Automatisation de contenu',
    description:
      'Génération d\'articles SEO, publication automatique sur WordPress, ajout d\'images et mise en forme — zéro intervention humaine.',
    tags: ['WordPress', 'OpenAI', 'SEO'],
  },
  {
    icon: 'Mail',
    title: 'Emails & CRM automatisés',
    description:
      'Séquences d\'emails déclenchées par les comportements de vos clients, mise à jour automatique du CRM, relances intelligentes.',
    tags: ['Mailchimp', 'HubSpot', 'ActiveCampaign'],
  },
  {
    icon: 'ShoppingCart',
    title: 'Gestion e-commerce',
    description:
      'Synchronisation des commandes, notifications clients en temps réel, gestion des stocks et facturation automatique.',
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
  },
  {
    icon: 'Zap',
    title: 'Connexion d\'outils (API)',
    description:
      'Nous connectons vos outils existants via API et Webhooks pour qu\'ils communiquent entre eux sans effort de votre part.',
    tags: ['Zapier-free', 'Webhooks', 'REST API'],
  },
  {
    icon: 'BarChart2',
    title: 'Reporting & données',
    description:
      'Consolidation automatique des données, génération de rapports périodiques et alertes basées sur vos KPI critiques.',
    tags: ['Google Sheets', 'Airtable', 'Notion'],
  },
  {
    icon: 'Share2',
    title: 'Réseaux sociaux & publication',
    description:
      'Planification et publication automatique sur vos canaux sociaux à partir d\'un seul contenu source. Multipliez votre présence.',
    tags: ['LinkedIn', 'Instagram', 'Twitter/X'],
  },
]

export const PROCESS_STEPS: Step[] = [
  {
    number: '01',
    title: 'Audit gratuit de vos process',
    description:
      'On analyse vos outils, vos flux de travail actuels et on identifie les tâches à fort potentiel d\'automatisation. Résultat : une feuille de route claire.',
  },
  {
    number: '02',
    title: 'Conception du workflow',
    description:
      'On conçoit l\'automatisation sur mesure avec n8n, connectée à vos outils existants via API et Webhooks. Aucune migration nécessaire.',
  },
  {
    number: '03',
    title: 'Tests & validation',
    description:
      'Chaque workflow est testé en profondeur avec vos données réelles, puis validé avec vous avant la mise en production. Aucune surprise.',
  },
  {
    number: '04',
    title: 'Mise en production & suivi',
    description:
      'Déploiement sur votre infrastructure ou la nôtre. Monitoring actif, alertes en cas d\'erreur et optimisations continues dans les premières semaines.',
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$297',
    period: 'par workflow',
    description:
      'Idéal pour démarrer : un workflow clé en main, déployé et opérationnel en moins de 5 jours.',
    features: [
      '1 workflow personnalisé',
      "Jusqu'à 3 intégrations d'outils",
      'Audit initial de vos process',
      'Tests & mise en production',
      'Support email 30 jours',
      'Documentation livrée',
    ],
    cta: 'Démarrer',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$697',
    period: 'par projet',
    description:
      'Pour les équipes qui veulent automatiser plusieurs processus et gagner en efficacité rapidement.',
    features: [
      "Jusqu'à 5 workflows personnalisés",
      'Intégrations illimitées',
      'Audit approfondi de vos process',
      'Tests, recette & mise en production',
      'Support prioritaire 60 jours',
      'Monitoring & alertes inclus',
      'Formation équipe (1h)',
    ],
    cta: 'Choisir Growth',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    period: '',
    description:
      'Accompagnement complet pour les entreprises avec des besoins complexes, un volume élevé ou une infra dédiée.',
    features: [
      'Workflows illimités',
      'Architecture sur mesure',
      'SLA de disponibilité garanti',
      'Infrastructure dédiée disponible',
      'Support dédié & onboarding',
      'Formations équipes',
      'Revue trimestrielle des process',
    ],
    cta: 'Nous contacter',
    highlighted: false,
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "C'est quoi n8n exactement ?",
    answer:
      "n8n est une plateforme d'automatisation open-source, comparable à Zapier mais bien plus puissante et flexible. Elle permet de créer des workflows complexes qui connectent des centaines d'applications via API, Webhooks ou en code. Nous l'utilisons comme moteur de tous nos workflows.",
  },
  {
    question: 'Dois-je avoir des compétences techniques ?',
    answer:
      'Aucune compétence technique requise de votre côté. Vous décrivez le problème à résoudre, nous concevons et déployons la solution. Vous recevez un workflow opérationnel avec une documentation claire pour le comprendre et le superviser.',
  },
  {
    question: "Quels outils peuvent être connectés ?",
    answer:
      "n8n s'intègre nativement avec plus de 400 applications : Gmail, Outlook, Slack, Notion, Airtable, Google Sheets, Shopify, WooCommerce, Stripe, HubSpot, Salesforce, WordPress, et bien d'autres. Si votre outil dispose d'une API, on peut le connecter.",
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer:
      "La sécurité est non négociable. Les workflows sont déployés sur une infrastructure sécurisée (ou la vôtre si vous préférez). Toutes les connexions sont chiffrées (HTTPS/TLS). Nous n'accédons jamais à vos données sans votre accord explicite et documenté. Consultez notre page Sécurité pour le détail.",
  },
  {
    question: 'Combien de temps pour mettre en production ?',
    answer:
      "Un workflow Starter est livré en 3 à 5 jours ouvrés. Un projet Growth est en production en 2 à 3 semaines. Les projets Enterprise font l'objet d'une planification dédiée. Tout dépend de la complexité des intégrations et de la disponibilité de votre équipe pour les validations.",
  },
  {
    question: 'Que se passe-t-il si un workflow tombe en erreur ?',
    answer:
      "Tous nos workflows incluent une gestion d'erreurs native. En cas de problème, vous recevez une alerte immédiate (email ou Slack). Pendant la période de support, nous intervenons sous 24h ouvrées pour corriger l'anomalie. Au-delà, nous proposons des contrats de maintenance.",
  },
  {
    question: 'Est-ce que je reste propriétaire du workflow ?',
    answer:
      "Absolument. À la livraison, vous recevez l'intégralité des fichiers de workflow, la documentation et les credentials de connexion. Vous pouvez reprendre la main à tout moment. Nous n'avons aucun lock-in.",
  },
  {
    question: "Comment se déroule l'audit gratuit ?",
    answer:
      "L'audit dure 30 à 45 minutes en visioconférence. On analyse vos outils actuels, vos tâches répétitives et vos points de friction. À l'issue, vous recevez une synthèse avec les automatisations recommandées, le temps estimé et la valeur générée. C'est gratuit et sans engagement.",
  },
]

export const USE_CASES = [
  {
    sector: 'E-commerce',
    icon: 'ShoppingBag',
    title: 'Automatisation commande-to-cash',
    description:
      'Une nouvelle commande Shopify déclenche automatiquement la facture Stripe, la mise à jour du stock, l\'email de confirmation personnalisé et la notification équipe sur Slack.',
    metrics: ['−4h/jour de saisie manuelle', '+99% de commandes traitées sans erreur'],
  },
  {
    sector: 'Agence',
    icon: 'Briefcase',
    title: 'Pipeline de contenu automatisé',
    description:
      "Un brief dans Notion génère un article SEO avec l'IA, l'image de couverture, la publication WordPress, le post LinkedIn et l'ajout dans le reporting Airtable.",
    metrics: ['×5 volume de contenu produit', '−80% de temps de publication'],
  },
  {
    sector: 'SaaS / Créateur',
    icon: 'Lightbulb',
    title: 'Onboarding client sans friction',
    description:
      "Un nouvel inscrit déclenche la création du compte CRM, la séquence d'emails de bienvenue, l'invitation Slack, l'attribution d'un onboarding manager et le suivi NPS.",
    metrics: ['Onboarding 100% automatisé', '+40% de taux d\'activation'],
  },
]
