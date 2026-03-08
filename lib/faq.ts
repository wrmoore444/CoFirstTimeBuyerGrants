export type FAQItem = {
  question: string
  answer: string
}

export type BilingualFAQ = {
  slug: string
  en: FAQItem
  es: FAQItem
}

export const FAQ_ITEMS: BilingualFAQ[] = [
  {
    slug: 'grants-available-colorado',
    en: {
      question: 'Are first-time homebuyer grants available in Colorado?',
      answer:
        'Programs designed to provide grant-style funding may be available to qualified buyers in Colorado. These programs are typically administered through state and local housing agencies and may help reduce the upfront cost of purchasing a home. Eligibility varies based on factors such as income, credit score, purchase price, and location. Speaking with a licensed Colorado mortgage professional is the best way to find out which programs may apply to your situation.',
    },
    es: {
      question: '¿Hay subsidios disponibles para compradores de casa por primera vez en Colorado?',
      answer:
        'Los programas diseñados para proporcionar fondos tipo subsidio pueden estar disponibles para compradores calificados en Colorado. Estos programas son típicamente administrados por agencias de vivienda estatales y locales y pueden ayudar a reducir los costos iniciales de compra de una vivienda. La elegibilidad varía según factores como ingresos, puntaje de crédito, precio de compra y ubicación.',
    },
  },
  {
    slug: 'down-payment-colorado',
    en: {
      question: 'How much down payment do you need to buy a home in Colorado?',
      answer:
        'The required down payment depends on the loan type. Conventional loans typically require 3–20%, FHA loans require as little as 3.5%, and VA or USDA loans may require no down payment for qualified buyers. Down payment assistance programs may be available to help reduce the amount you need to bring to closing, making homeownership more accessible for first-time buyers.',
    },
    es: {
      question: '¿Cuánto dinero de pago inicial necesitas para comprar una casa en Colorado?',
      answer:
        'El pago inicial requerido depende del tipo de préstamo. Los préstamos convencionales generalmente requieren entre el 3% y el 20%, los préstamos FHA requieren tan poco como el 3.5%, y los préstamos VA o USDA pueden no requerir pago inicial para compradores calificados. Los programas de asistencia para el pago inicial pueden estar disponibles para ayudar a reducir la cantidad que necesitas llevar al cierre.',
    },
  },
  {
    slug: 'credit-score-colorado',
    en: {
      question: 'What credit score is needed to buy a home in Colorado?',
      answer:
        'Most conventional loans require a credit score of 620 or higher, while FHA loans may be available with scores as low as 580. Homebuyer assistance programs may have their own credit requirements, which can vary by program. A licensed Colorado mortgage professional can review your credit profile and help identify which loan and assistance options may be available to you.',
    },
    es: {
      question: '¿Qué puntaje de crédito se necesita para comprar una casa en Colorado?',
      answer:
        'La mayoría de los préstamos convencionales requieren un puntaje de crédito de 620 o más, mientras que los préstamos FHA pueden estar disponibles con puntajes tan bajos como 580. Los programas de asistencia para compradores pueden tener sus propios requisitos de crédito, que varían según el programa. Un profesional hipotecario con licencia en Colorado puede revisar tu perfil de crédito y ayudarte a identificar qué opciones pueden estar disponibles para ti.',
    },
  },
  {
    slug: 'first-time-homebuyer-definition',
    en: {
      question: 'Who qualifies as a first-time homebuyer?',
      answer:
        'For the purposes of most homebuyer assistance programs, a first-time homebuyer is generally defined as someone who has not owned a primary residence in the past three years. This means that even if you previously owned a home, you may still qualify if sufficient time has passed. Some programs may have additional or different eligibility definitions — a mortgage professional can clarify which programs you may be eligible for.',
    },
    es: {
      question: '¿Quién califica como comprador de casa por primera vez?',
      answer:
        'Para la mayoría de los programas de asistencia, un comprador de casa por primera vez generalmente se define como alguien que no ha sido propietario de una residencia principal en los últimos tres años. Esto significa que incluso si antes tuviste una casa, aún puedes calificar si ha pasado suficiente tiempo. Algunos programas pueden tener definiciones de elegibilidad adicionales o diferentes.',
    },
  },
  {
    slug: 'closing-cost-assistance',
    en: {
      question: 'Can assistance programs help with closing costs?',
      answer:
        'Some homebuyer assistance programs are designed to help with closing costs in addition to or instead of down payment assistance. The availability of closing cost assistance depends on the specific program and your eligibility. Closing costs typically range from 2–5% of the loan amount, and reducing these costs can make a meaningful difference for first-time buyers.',
    },
    es: {
      question: '¿Pueden los programas de asistencia ayudar con los costos de cierre?',
      answer:
        'Algunos programas de asistencia para compradores están diseñados para ayudar con los costos de cierre, además de la asistencia para el pago inicial o en su lugar. La disponibilidad de asistencia para costos de cierre depende del programa específico y de tu elegibilidad. Los costos de cierre generalmente oscilan entre el 2% y el 5% del monto del préstamo.',
    },
  },
  {
    slug: 'grants-taxable',
    en: {
      question: 'Are homebuyer grants taxable?',
      answer:
        'In many cases, grant funds used toward the purchase of a primary residence are not considered taxable income. However, tax treatment can vary depending on the specific program and your individual tax situation. Buyers should consult a qualified tax professional to understand how any assistance received may affect their tax obligations.',
    },
    es: {
      question: '¿Los subsidios para compradores de casa son gravables?',
      answer:
        'En muchos casos, los fondos de subsidio utilizados para la compra de una residencia principal no se consideran ingresos gravables. Sin embargo, el tratamiento fiscal puede variar según el programa específico y tu situación tributaria individual. Los compradores deben consultar a un profesional fiscal calificado para entender cómo la asistencia recibida puede afectar sus obligaciones fiscales.',
    },
  },
  {
    slug: 'how-to-qualify',
    en: {
      question: 'How do I find out if I qualify for homebuyer assistance?',
      answer:
        'The best way to find out if you may qualify is to speak directly with a licensed Colorado mortgage professional who is familiar with available programs. Eligibility depends on multiple factors including income, credit, purchase price, and location. Complete the form on this page or contact us directly — a member of our team will review your situation and walk you through your options at no cost and with no obligation.',
    },
    es: {
      question: '¿Cómo puedo saber si califico para la asistencia para compradores de casa?',
      answer:
        'La mejor manera de saber si puedes calificar es hablar directamente con un profesional hipotecario con licencia en Colorado que esté familiarizado con los programas disponibles. La elegibilidad depende de múltiples factores, incluidos ingresos, crédito, precio de compra y ubicación. Completa el formulario en esta página o contáctanos directamente — un miembro de nuestro equipo revisará tu situación sin costo alguno y sin ninguna obligación.',
    },
  },
]

export function getFAQItems(lang: 'en' | 'es'): FAQItem[] {
  return FAQ_ITEMS.map((f) => f[lang])
}
