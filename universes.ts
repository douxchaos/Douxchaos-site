export type Universe = {
  slug: string
  name: string
  tagline: string
  image: string
  intro: string
  description: string[]
  benefits: { title: string; text: string }[]
  testimonial: { quote: string; author: string; role: string; image: string }
  cta: string
}

export const universes: Universe[] = [
  {
    slug: 'couple',
    name: 'Couple',
    tagline: 'L\'art d\'aimer dans la durée',
    image: '/images/couple.png',
    intro:
      'Raviver la flamme, retrouver la complicité et bâtir une relation profonde, sincère et durable.',
    description: [
      'Au cœur de chaque couple réside un équilibre subtil entre passion et tendresse, entre liberté et engagement. Doux Chaos accompagne les âmes liées vers une harmonie retrouvée.',
      'À travers un accompagnement d\'exception, nous explorons les langages de l\'amour, dénouons les tensions et révélons la beauté singulière de votre histoire commune.',
    ],
    benefits: [
      {
        title: 'Reconnexion émotionnelle',
        text: 'Retrouver l\'écoute, la présence et la profondeur des premiers instants.',
      },
      {
        title: 'Communication apaisée',
        text: 'Transformer les désaccords en dialogues constructifs et bienveillants.',
      },
      {
        title: 'Intimité renouvelée',
        text: 'Raviver le désir et célébrer la complicité au quotidien.',
      },
    ],
    testimonial: {
      quote:
        'Doux Chaos nous a offert un espace rare, où notre amour a retrouvé son souffle et sa lumière.',
      author: 'Camille & Antoine',
      role: 'Ensemble depuis 12 ans',
      image: '/images/portrait-1.png',
    },
    cta: 'Réservez votre accompagnement couple',
  },
  {
    slug: 'amitie',
    name: 'Amitié',
    tagline: 'Cultiver les liens qui élèvent',
    image: '/images/amitie.png',
    intro:
      'Honorer, approfondir et préserver les amitiés précieuses qui donnent du sens à nos vies.',
    description: [
      'L\'amitié véritable est un trésor que l\'on cultive avec attention et délicatesse. Doux Chaos vous accompagne à nourrir ces liens essentiels.',
      'Nous vous aidons à comprendre vos relations, à dépasser les malentendus et à célébrer la richesse des connexions humaines authentiques.',
    ],
    benefits: [
      {
        title: 'Liens authentiques',
        text: 'Créer des relations sincères, fondées sur la confiance et le respect.',
      },
      {
        title: 'Résolution des tensions',
        text: 'Apaiser les blessures et restaurer l\'harmonie entre les êtres.',
      },
      {
        title: 'Présence consciente',
        text: 'Être pleinement là pour celles et ceux qui comptent.',
      },
    ],
    testimonial: {
      quote:
        'J\'ai redécouvert la valeur de mes amitiés et appris à les honorer avec une attention nouvelle.',
      author: 'Léa M.',
      role: 'Accompagnement amitié',
      image: '/images/portrait-3.png',
    },
    cta: 'Explorez l\'univers de l\'amitié',
  },
  {
    slug: 'famille',
    name: 'Famille',
    tagline: 'L\'héritage des liens du cœur',
    image: '/images/famille.png',
    intro:
      'Tisser une harmonie familiale durable, fondée sur l\'écoute, le respect et l\'amour partagé.',
    description: [
      'La famille est le premier théâtre de nos émotions, le lieu où se nouent les liens les plus profonds. Doux Chaos accompagne les familles vers une sérénité retrouvée.',
      'Nous créons un espace de dialogue où chaque génération trouve sa place, où les héritages se transmettent et où l\'amour circule librement.',
    ],
    benefits: [
      {
        title: 'Harmonie intergénérationnelle',
        text: 'Réunir les générations autour de valeurs communes et partagées.',
      },
      {
        title: 'Dialogue retrouvé',
        text: 'Restaurer la communication et l\'écoute au sein du foyer.',
      },
      {
        title: 'Équilibre familial',
        text: 'Apaiser les tensions et cultiver un climat de paix durable.',
      },
    ],
    testimonial: {
      quote:
        'Notre famille a retrouvé une douceur que nous croyions perdue. Un accompagnement précieux.',
      author: 'Famille Dubois',
      role: 'Accompagnement familial',
      image: '/images/portrait-2.png',
    },
    cta: 'Réservez votre accompagnement familial',
  },
  {
    slug: 'parent-enfant',
    name: 'Parent-Enfant',
    tagline: 'Accompagner sans jamais imposer',
    image: '/images/parent-enfant.png',
    intro:
      'Construire une relation parent-enfant fondée sur la confiance, l\'écoute et le respect mutuel.',
    description: [
      'La relation parent-enfant est l\'une des plus belles et des plus exigeantes. Doux Chaos accompagne les parents vers une parentalité consciente et épanouie.',
      'Nous vous aidons à comprendre les besoins de votre enfant, à poser un cadre bienveillant et à cultiver un lien profond et sécurisant.',
    ],
    benefits: [
      {
        title: 'Parentalité consciente',
        text: 'Accompagner l\'enfant avec présence, écoute et bienveillance.',
      },
      {
        title: 'Cadre sécurisant',
        text: 'Poser des repères clairs dans le respect et la douceur.',
      },
      {
        title: 'Confiance mutuelle',
        text: 'Bâtir un lien profond, fondé sur l\'authenticité et le respect.',
      },
    ],
    testimonial: {
      quote:
        'J\'ai appris à écouter mon enfant autrement. Notre relation s\'est transformée en profondeur.',
      author: 'Sophie R.',
      role: 'Mère de deux enfants',
      image: '/images/portrait-1.png',
    },
    cta: 'Réservez votre accompagnement parental',
  },
  {
    slug: 'developpement-personnel',
    name: 'Développement personnel',
    tagline: 'Le chemin vers soi',
    image: '/images/developpement.png',
    intro:
      'Révéler votre plein potentiel, retrouver l\'équilibre intérieur et avancer avec clarté.',
    description: [
      'Le développement personnel est un voyage intime vers la connaissance de soi. Doux Chaos vous accompagne à explorer vos aspirations profondes.',
      'À travers un accompagnement sur mesure, nous révélons vos forces, apaisons vos doutes et vous guidons vers une vie alignée avec vos valeurs.',
    ],
    benefits: [
      {
        title: 'Clarté intérieure',
        text: 'Identifier vos aspirations profondes et donner du sens à votre vie.',
      },
      {
        title: 'Confiance en soi',
        text: 'Révéler vos forces et avancer avec assurance et sérénité.',
      },
      {
        title: 'Équilibre durable',
        text: 'Cultiver une paix intérieure ancrée dans le quotidien.',
      },
    ],
    testimonial: {
      quote:
        'Un cheminement d\'une rare profondeur. J\'ai retrouvé confiance, clarté et paix intérieure.',
      author: 'Julien T.',
      role: 'Accompagnement individuel',
      image: '/images/portrait-2.png',
    },
    cta: 'Commencez votre cheminement',
  },
]

export const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Couple', href: '/couple' },
  { label: 'Amitié', href: '/amitie' },
  { label: 'Famille', href: '/famille' },
  { label: 'Parent-Enfant', href: '/parent-enfant' },
  { label: 'Développement personnel', href: '/developpement-personnel' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]
