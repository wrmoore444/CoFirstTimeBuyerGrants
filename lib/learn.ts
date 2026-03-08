export interface ArticleSection {
  heading: string
  body: string
}

export interface ArticleFaq {
  question: string
  answer: string
}

export interface ArticleContent {
  metaTitle: string
  metaDescription: string
  title: string
  shortDesc: string
  heroSubtitle: string
  sections: ArticleSection[]
  faqs: ArticleFaq[]
}

export interface Article {
  slug: string
  en: ArticleContent
  es: ArticleContent
}

export const ARTICLES: Article[] = [
  {
    slug: 'colorado-first-time-homebuyer-programs',
    en: {
      metaTitle: 'Colorado First-Time Homebuyer Programs: What You Should Know',
      metaDescription: 'Learn about homebuyer assistance programs that may be available to first-time buyers in Colorado, including down payment help and eligibility basics.',
      title: 'Colorado First-Time Homebuyer Programs: What You Should Know',
      shortDesc: 'An overview of the types of homebuyer assistance programs that may be available to first-time buyers in Colorado.',
      heroSubtitle: 'Colorado has a range of programs designed to help first-time buyers reduce the upfront cost of purchasing a home. Here is what you should know before getting started.',
      sections: [
        {
          heading: 'What Programs May Be Available',
          body: 'Colorado offers several types of homebuyer assistance programs that may help reduce the upfront cost of purchasing a home. These programs can vary by county, household income, purchase price, and other factors. Common types include down payment assistance programs, closing cost assistance, and grant-style funding that may not require repayment. Availability and terms depend on the specific program and your eligibility profile.',
        },
        {
          heading: 'Who May Qualify',
          body: 'Eligibility for homebuyer assistance programs typically depends on several factors, including whether you are a first-time buyer (or have not owned a home in the past three years), your household income relative to area median income, the purchase price of the home, and your credit profile. Many programs serve buyers across a broad range of income levels. The best way to determine your eligibility is to speak with a licensed Colorado mortgage professional who specializes in these programs.',
        },
        {
          heading: 'How Assistance Programs Work',
          body: "Most homebuyer assistance programs work in conjunction with a primary mortgage loan. The assistance may be applied toward your down payment, closing costs, or both. Some programs provide funds in the form of a second mortgage that may be forgiven over time, while others function more like a grant with no repayment requirement. Your mortgage professional can explain the specific terms of any program you may qualify for and how it would work alongside your primary financing.",
        },
        {
          heading: 'Next Steps for Colorado Buyers',
          body: 'The first step is to speak with a licensed Colorado mortgage professional who can review your situation and identify which programs you may qualify for. There is no cost to explore your options, and you are not obligated to apply. The earlier you start the conversation, the more time you have to understand your options and prepare for the homebuying process.',
        },
      ],
      faqs: [
        {
          question: 'Do I have to be a first-time homebuyer to qualify?',
          answer: 'Not always. Many programs define "first-time buyer" as someone who has not owned a home in the past three years. If you owned a home previously but have not for several years, you may still qualify under this definition.',
        },
        {
          question: 'How much assistance may be available?',
          answer: 'The amount varies by program and depends on your eligibility. Some programs provide a fixed amount while others are calculated as a percentage of the purchase price. A mortgage professional can give you a more specific estimate based on your situation.',
        },
        {
          question: 'Will I have to pay the assistance back?',
          answer: 'It depends on the program. Some programs are structured as grants with no repayment required as long as you meet program terms. Others may be forgiven over time. Your mortgage professional will explain the repayment structure of any program you may qualify for.',
        },
        {
          question: 'Can these programs be combined with FHA loans?',
          answer: 'In many cases, yes. Several assistance programs are designed to work alongside FHA loans and other common financing types. Compatibility depends on the specific program and lender.',
        },
      ],
    },
    es: {
      metaTitle: 'Programas para Compradores de Casa por Primera Vez en Colorado: Lo Que Debes Saber',
      metaDescription: 'Aprende sobre los programas de asistencia para compradores de casa por primera vez que pueden estar disponibles en Colorado, incluyendo ayuda para el pago inicial.',
      title: 'Programas para Compradores de Casa por Primera Vez en Colorado: Lo Que Debes Saber',
      shortDesc: 'Una descripción general de los tipos de programas de asistencia que pueden estar disponibles para compradores de casa por primera vez en Colorado.',
      heroSubtitle: 'Colorado tiene una variedad de programas diseñados para ayudar a los compradores de casa por primera vez a reducir los costos iniciales de comprar una casa. Esto es lo que debes saber antes de comenzar.',
      sections: [
        {
          heading: 'Qué Programas Pueden Estar Disponibles',
          body: 'Colorado ofrece varios tipos de programas de asistencia para compradores de vivienda que pueden ayudar a reducir los costos iniciales de comprar una casa. Estos programas pueden variar según el condado, los ingresos del hogar, el precio de compra y otros factores. Los tipos comunes incluyen programas de asistencia para el pago inicial, asistencia para los costos de cierre y financiamiento tipo subsidio que puede no requerir reembolso.',
        },
        {
          heading: 'Quién Puede Calificar',
          body: 'La elegibilidad para los programas de asistencia para compradores de vivienda generalmente depende de varios factores, incluyendo si eres comprador de casa por primera vez, los ingresos de tu hogar en relación con el ingreso medio del área, el precio de compra de la vivienda y tu perfil crediticio. Muchos programas atienden a compradores en una amplia gama de niveles de ingresos.',
        },
        {
          heading: 'Cómo Funcionan los Programas de Asistencia',
          body: 'La mayoría de los programas de asistencia para compradores de vivienda funcionan junto con un préstamo hipotecario principal. La asistencia puede aplicarse hacia tu pago inicial, los costos de cierre, o ambos. Algunos programas proporcionan fondos en forma de una segunda hipoteca que puede ser perdonada con el tiempo, mientras que otros funcionan más como un subsidio sin requisito de reembolso.',
        },
        {
          heading: 'Próximos Pasos para Compradores en Colorado',
          body: 'El primer paso es hablar con un profesional hipotecario con licencia en Colorado que pueda revisar tu situación e identificar para qué programas podrías calificar. No hay costo para explorar tus opciones y no estás obligado a solicitar. Cuanto antes inicies la conversación, más tiempo tendrás para entender tus opciones.',
        },
      ],
      faqs: [
        {
          question: '¿Tengo que ser comprador de casa por primera vez para calificar?',
          answer: 'No siempre. Muchos programas definen "comprador por primera vez" como alguien que no ha sido propietario de una casa en los últimos tres años. Si anteriormente tenías una casa pero llevas varios años sin tenerla, aún podrías calificar bajo esta definición.',
        },
        {
          question: '¿Cuánta asistencia puede estar disponible?',
          answer: 'La cantidad varía según el programa y depende de tu elegibilidad. Algunos programas proporcionan una cantidad fija mientras que otros se calculan como un porcentaje del precio de compra. Un profesional hipotecario puede darte una estimación más específica basada en tu situación.',
        },
        {
          question: '¿Tendré que devolver la asistencia?',
          answer: 'Depende del programa. Algunos programas están estructurados como subsidios sin reembolso requerido siempre que cumplas los términos del programa. Otros pueden ser perdonados con el tiempo. Tu profesional hipotecario explicará la estructura de reembolso de cualquier programa para el que puedas calificar.',
        },
        {
          question: '¿Se pueden combinar estos programas con préstamos FHA?',
          answer: 'En muchos casos, sí. Varios programas de asistencia están diseñados para funcionar junto con préstamos FHA y otros tipos de financiamiento comunes. La compatibilidad depende del programa y prestamista específicos.',
        },
      ],
    },
  },
  {
    slug: 'colorado-down-payment-assistance',
    en: {
      metaTitle: 'Colorado Down Payment Assistance for First-Time Buyers | What to Know',
      metaDescription: 'Explore down payment assistance programs that may be available to qualified first-time homebuyers in Colorado. Learn how these programs work and who may qualify.',
      title: 'Colorado Down Payment Assistance: A Guide for First-Time Buyers',
      shortDesc: 'How down payment assistance programs work in Colorado and what first-time buyers should understand before applying.',
      heroSubtitle: 'The down payment is one of the biggest upfront costs of buying a home. Learn how Colorado assistance programs may help reduce this barrier for qualified buyers.',
      sections: [
        {
          heading: 'What Is Down Payment Assistance?',
          body: 'Down payment assistance refers to programs that provide funds to help cover part or all of the required down payment on a home purchase. These programs are typically offered through state housing agencies, local programs, or participating lenders and are designed to make homeownership more accessible for buyers who meet eligibility requirements. The structure varies: some programs provide outright grants, while others offer second mortgages that may be forgiven over time.',
        },
        {
          heading: 'How Much Assistance May Be Available in Colorado?',
          body: 'The amount of down payment assistance available varies by program and depends on your income, the purchase price of the home, and the specific program you qualify for. Some Colorado buyers may qualify for assistance that covers a meaningful portion of their required down payment. The exact amount is determined during the mortgage pre-approval process and depends on multiple eligibility factors.',
        },
        {
          heading: 'Who May Qualify for Down Payment Assistance?',
          body: 'Down payment assistance programs typically have income limits, purchase price limits, and require buyers to meet a minimum credit score threshold. First-time buyers — or buyers who have not owned a home in the past three years — are most commonly eligible, though some programs are open to a broader range of buyers. Geographic requirements may also apply, meaning the property must be located in a qualifying area.',
        },
        {
          heading: 'Applying for Down Payment Assistance',
          body: 'Down payment assistance is typically applied for as part of the mortgage process, not separately. A Colorado-licensed mortgage professional who works with these programs will guide you through the application and help ensure you meet all program requirements. Starting the conversation early — before you begin actively searching for a home — gives you the most time to prepare and maximize your options.',
        },
      ],
      faqs: [
        {
          question: 'Does down payment assistance have to be repaid?',
          answer: "It depends on the program. Some programs are structured as grants with no repayment required as long as you remain in the home for a specified period. Others are second mortgages that may be forgiven over time. Your mortgage professional will explain the specific terms.",
        },
        {
          question: 'Can down payment assistance be combined with a conventional loan?',
          answer: 'In many cases, yes. Some programs are compatible with conventional loans, while others are designed to work specifically with FHA or other loan types. Your mortgage professional can help identify programs that work with your preferred loan type.',
        },
        {
          question: 'How long does the process take?',
          answer: 'Timeline varies, but buyers who start the process early and have their documentation ready generally move through more smoothly. Your mortgage professional can give you a realistic timeline based on your situation.',
        },
        {
          question: 'Are there income limits for down payment assistance?',
          answer: 'Most programs have income limits tied to the Area Median Income (AMI) for your county. However, the limits are often set at levels that include many middle-income buyers. A mortgage professional can review your income against current program limits.',
        },
      ],
    },
    es: {
      metaTitle: 'Asistencia para el Pago Inicial en Colorado | Guía para Compradores de Casa',
      metaDescription: 'Explora los programas de asistencia para el pago inicial que pueden estar disponibles para compradores de casa por primera vez calificados en Colorado.',
      title: 'Asistencia para el Pago Inicial en Colorado: Una Guía para Compradores de Casa por Primera Vez',
      shortDesc: 'Cómo funcionan los programas de asistencia para el pago inicial en Colorado y qué deben entender los compradores de casa por primera vez.',
      heroSubtitle: 'El pago inicial es uno de los mayores costos iniciales de comprar una casa. Aprende cómo los programas de asistencia de Colorado pueden ayudar a reducir esta barrera para compradores calificados.',
      sections: [
        {
          heading: '¿Qué es la Asistencia para el Pago Inicial?',
          body: 'La asistencia para el pago inicial se refiere a programas que proporcionan fondos para ayudar a cubrir parte o todo el pago inicial requerido en una compra de vivienda. Estos programas están diseñados para hacer la propiedad de vivienda más accesible para compradores que cumplen los requisitos de elegibilidad. La estructura varía: algunos programas proporcionan subsidios directos, mientras que otros ofrecen segundas hipotecas que pueden ser perdonadas con el tiempo.',
        },
        {
          heading: '¿Cuánta Asistencia Puede Estar Disponible en Colorado?',
          body: 'La cantidad de asistencia para el pago inicial disponible varía según el programa y depende de tus ingresos, el precio de compra de la vivienda y el programa específico para el que calificas. La cantidad exacta se determina durante el proceso de pre-aprobación hipotecaria y depende de múltiples factores de elegibilidad.',
        },
        {
          heading: '¿Quién Puede Calificar para la Asistencia para el Pago Inicial?',
          body: 'Los programas de asistencia para el pago inicial generalmente tienen límites de ingresos, límites de precio de compra y requieren que los compradores cumplan un umbral mínimo de puntaje crediticio. Los compradores de primera vez, o compradores que no han sido propietarios de una casa en los últimos tres años, son los más comúnmente elegibles.',
        },
        {
          heading: 'Solicitar Asistencia para el Pago Inicial',
          body: 'La asistencia para el pago inicial generalmente se solicita como parte del proceso hipotecario, no por separado. Un profesional hipotecario con licencia en Colorado que trabaje con estos programas te guiará a través de la solicitud y ayudará a garantizar que cumplas todos los requisitos del programa.',
        },
      ],
      faqs: [
        {
          question: '¿Hay que devolver la asistencia para el pago inicial?',
          answer: 'Depende del programa. Algunos programas están estructurados como subsidios sin reembolso requerido siempre que permanezcas en la casa por un período específico. Otros son segundas hipotecas que pueden ser perdonadas con el tiempo.',
        },
        {
          question: '¿Se puede combinar la asistencia para el pago inicial con un préstamo convencional?',
          answer: 'En muchos casos, sí. Algunos programas son compatibles con préstamos convencionales, mientras que otros están diseñados para funcionar específicamente con préstamos FHA u otros tipos. Tu profesional hipotecario puede ayudar a identificar programas que funcionen con tu tipo de préstamo preferido.',
        },
        {
          question: '¿Cuánto tiempo toma el proceso?',
          answer: 'El tiempo varía, pero los compradores que inician el proceso temprano y tienen su documentación lista generalmente avanzan más fácilmente. Tu profesional hipotecario puede darte un cronograma realista según tu situación.',
        },
        {
          question: '¿Hay límites de ingresos para la asistencia para el pago inicial?',
          answer: 'La mayoría de los programas tienen límites de ingresos vinculados al Ingreso Medio del Área (AMI) de tu condado. Sin embargo, los límites a menudo están establecidos en niveles que incluyen a muchos compradores de ingresos medios.',
        },
      ],
    },
  },
  {
    slug: 'how-much-down-payment-colorado',
    en: {
      metaTitle: 'How Much Down Payment Do You Need to Buy a Home in Colorado?',
      metaDescription: 'Learn about down payment requirements for buying a home in Colorado and how assistance programs may help first-time buyers reduce the amount needed at closing.',
      title: 'How Much Down Payment Do You Need to Buy a Home in Colorado?',
      shortDesc: "Understanding Colorado's down payment requirements and how assistance programs may reduce what you need to bring to closing.",
      heroSubtitle: 'One of the most common questions first-time buyers have is how much they need for a down payment. The answer depends on your loan type — and assistance programs may help reduce the amount.',
      sections: [
        {
          heading: 'Standard Down Payment Requirements',
          body: "Down payment requirements vary depending on your loan type. Conventional loans typically require between 3% and 20% of the purchase price as a down payment. FHA loans, which are popular with first-time buyers, generally require a minimum of 3.5% down with a qualifying credit score. VA loans (for eligible veterans and military service members) and USDA loans (for qualifying rural areas) may allow zero down payment. The right loan type for you depends on your financial profile and the property you are purchasing.",
        },
        {
          heading: 'How Assistance Programs Can Reduce Your Down Payment',
          body: "Colorado homebuyer assistance programs may provide funds that can be applied toward your required down payment, reducing or eliminating the out-of-pocket amount you need to bring to closing. The amount of assistance available depends on the program and your eligibility. Some buyers are able to purchase a home with significantly less upfront cash than they originally expected. Your mortgage professional can walk you through what programs may be available to you and how they interact with your primary loan.",
        },
        {
          heading: 'Other Upfront Costs to Plan For',
          body: 'Beyond the down payment, buyers should plan for closing costs, which typically range from 2% to 5% of the purchase price. Closing costs cover loan origination fees, title insurance, appraisal, prepaid taxes and insurance, and other expenses. Some assistance programs can also help with closing costs. Additionally, most buyers opt to have their earnest money deposit ready when making an offer — this is typically credited toward your closing costs or down payment.',
        },
        {
          heading: 'What to Do Next',
          body: "The best way to understand exactly how much you'll need for your down payment — and what assistance may be available — is to speak with a licensed Colorado mortgage professional. They can review your full financial picture, identify programs you may qualify for, and help you develop a realistic path to homeownership.",
        },
      ],
      faqs: [
        {
          question: "Can I buy a home in Colorado with no down payment?",
          answer: 'Depending on your eligibility, VA loans and USDA loans may allow zero down payment. Some assistance programs may also cover the full required down payment for buyers who qualify. Speak with a mortgage professional to understand your specific options.',
        },
        {
          question: 'Is a 20% down payment required to buy a home?',
          answer: 'No. While a 20% down payment eliminates the need for private mortgage insurance (PMI), many loan programs accept significantly lower amounts. FHA loans start at 3.5% down, and some conventional loans go as low as 3%.',
        },
        {
          question: 'What is earnest money and do I need it?',
          answer: 'Earnest money is a deposit made when submitting an offer on a home, demonstrating your commitment to the purchase. It is typically 1%–2% of the purchase price and is credited toward your down payment or closing costs at closing.',
        },
        {
          question: 'Do assistance programs cover closing costs too?',
          answer: 'Some assistance programs can be applied to both down payment and closing costs. Others are specific to one or the other. Your mortgage professional can identify programs that address your full upfront cost picture.',
        },
      ],
    },
    es: {
      metaTitle: '¿Cuánto Pago Inicial Necesitas para Comprar una Casa en Colorado?',
      metaDescription: 'Aprende sobre los requisitos de pago inicial para comprar una casa en Colorado y cómo los programas de asistencia pueden ayudar a los compradores de casa por primera vez.',
      title: '¿Cuánto Pago Inicial Necesitas para Comprar una Casa en Colorado?',
      shortDesc: 'Entendiendo los requisitos de pago inicial de Colorado y cómo los programas de asistencia pueden reducir lo que necesitas llevar al cierre.',
      heroSubtitle: 'Una de las preguntas más comunes de los compradores de casa por primera vez es cuánto necesitan para el pago inicial. La respuesta depende del tipo de préstamo, y los programas de asistencia pueden ayudar a reducir la cantidad.',
      sections: [
        {
          heading: 'Requisitos Estándar de Pago Inicial',
          body: 'Los requisitos de pago inicial varían según el tipo de préstamo. Los préstamos convencionales generalmente requieren entre el 3% y el 20% del precio de compra como pago inicial. Los préstamos FHA, que son populares entre los compradores de primera vez, generalmente requieren un mínimo del 3.5% de pago inicial con un puntaje crediticio calificado.',
        },
        {
          heading: 'Cómo los Programas de Asistencia Pueden Reducir Tu Pago Inicial',
          body: 'Los programas de asistencia para compradores de Colorado pueden proporcionar fondos que pueden aplicarse a tu pago inicial requerido, reduciendo o eliminando la cantidad de efectivo que necesitas llevar al cierre. La cantidad de asistencia disponible depende del programa y tu elegibilidad.',
        },
        {
          heading: 'Otros Costos Iniciales a Considerar',
          body: 'Más allá del pago inicial, los compradores deben planificar para los costos de cierre, que generalmente oscilan entre el 2% y el 5% del precio de compra. Algunos programas de asistencia también pueden ayudar con los costos de cierre.',
        },
        {
          heading: 'Qué Hacer a Continuación',
          body: 'La mejor manera de entender exactamente cuánto necesitarás para tu pago inicial, y qué asistencia puede estar disponible, es hablar con un profesional hipotecario con licencia en Colorado.',
        },
      ],
      faqs: [
        {
          question: '¿Puedo comprar una casa en Colorado sin pago inicial?',
          answer: 'Dependiendo de tu elegibilidad, los préstamos VA y USDA pueden permitir pago inicial cero. Algunos programas de asistencia también pueden cubrir el pago inicial completo para compradores que califican.',
        },
        {
          question: '¿Se requiere un pago inicial del 20% para comprar una casa?',
          answer: 'No. Si bien un pago inicial del 20% elimina la necesidad de seguro hipotecario privado (PMI), muchos programas de préstamos aceptan cantidades significativamente menores.',
        },
        {
          question: '¿Qué es el dinero de garantía y lo necesito?',
          answer: 'El dinero de garantía es un depósito realizado al presentar una oferta en una casa. Generalmente es del 1% al 2% del precio de compra y se acredita hacia tu pago inicial o costos de cierre al cierre.',
        },
        {
          question: '¿Los programas de asistencia también cubren los costos de cierre?',
          answer: 'Algunos programas de asistencia pueden aplicarse tanto al pago inicial como a los costos de cierre. Tu profesional hipotecario puede identificar programas que aborden tu panorama de costos iniciales completo.',
        },
      ],
    },
  },
  {
    slug: 'colorado-first-time-homebuyer-credit-score',
    en: {
      metaTitle: 'Credit Score Requirements for First-Time Homebuyers in Colorado',
      metaDescription: "What credit score do you need to buy a home in Colorado? Learn about credit score requirements for common loan types and how your score affects your homebuying options.",
      title: "What Credit Score Do You Need to Buy a Home in Colorado?",
      shortDesc: 'Credit score requirements for common loan types and how your credit profile affects your homebuying options in Colorado.',
      heroSubtitle: 'Your credit score is one of the key factors lenders review when you apply for a mortgage. Here is what you should know about credit score requirements for buying a home in Colorado.',
      sections: [
        {
          heading: 'Credit Score Requirements by Loan Type',
          body: 'Different loan programs have different minimum credit score requirements. FHA loans typically require a minimum score of 580 to qualify for a 3.5% down payment, or 500–579 with a larger down payment. Conventional loans often require a minimum score of 620 or higher. VA loans (for eligible military borrowers) generally require at least a 580–620 depending on the lender. Requirements can vary between lenders even for the same loan type, so getting a professional review of your full credit picture is important.',
        },
        {
          heading: 'How Your Credit Score Affects Your Options',
          body: "Your credit score influences not only whether you qualify for a loan, but also the interest rate you may receive. Higher credit scores generally result in lower interest rates, which can meaningfully reduce your monthly payment over the life of the loan. Buyers with lower credit scores may still qualify for certain programs, but they may face more limited options or different terms. A mortgage professional can review your full credit profile and help you understand what loan programs may be available to you.",
        },
        {
          heading: 'Can You Buy a Home with a Lower Credit Score?',
          body: 'Yes, in some cases. FHA loans are specifically designed to be accessible to buyers with lower credit scores, and some assistance programs have minimum score requirements that align with FHA guidelines. If your credit score is below conventional loan thresholds, a mortgage professional can help you understand which programs you may still qualify for and what steps you might take to strengthen your application.',
        },
        {
          heading: 'Steps to Improve Your Credit Score Before Buying',
          body: 'If your credit score needs improvement before applying for a mortgage, there are steps you can take. Paying down credit card balances, making all payments on time, avoiding new credit applications, and correcting any errors on your credit report can all have a positive effect over time. Your mortgage professional can review your credit report with you and suggest a practical plan for improving your score if needed.',
        },
      ],
      faqs: [
        {
          question: 'What is the minimum credit score to buy a house in Colorado?',
          answer: 'The minimum score varies by loan type. FHA loans can go as low as 500–580, while conventional loans typically require 620 or higher. Individual lenders may have stricter standards. A mortgage professional can review your score and match you with appropriate programs.',
        },
        {
          question: 'Will checking my credit hurt my score?',
          answer: "Checking your own credit (a 'soft inquiry') does not affect your score. When a lender checks your credit as part of a mortgage application (a 'hard inquiry'), it may have a small temporary effect. Shopping multiple lenders within a short window is typically treated as a single inquiry.",
        },
        {
          question: 'Can I buy a home if I have no credit history?',
          answer: "Some lenders offer programs for buyers with limited or no credit history using alternative credit verification, such as rental payment history or utility bills. Speak with a mortgage professional to explore your options.",
        },
        {
          question: 'How long does it take to improve a credit score?',
          answer: 'It depends on the specific factors affecting your score. Small improvements can happen within a few months. More significant improvements, such as recovering from a late payment or reducing a high balance, may take six months to a year or more.',
        },
      ],
    },
    es: {
      metaTitle: 'Requisitos de Puntaje de Crédito para Compradores de Casa por Primera Vez en Colorado',
      metaDescription: '¿Qué puntaje de crédito necesitas para comprar una casa en Colorado? Aprende sobre los requisitos de puntaje de crédito y cómo tu perfil crediticio afecta tus opciones.',
      title: '¿Qué Puntaje de Crédito Necesitas para Comprar una Casa en Colorado?',
      shortDesc: 'Requisitos de puntaje de crédito para tipos de préstamos comunes y cómo tu perfil crediticio afecta tus opciones de compra de vivienda en Colorado.',
      heroSubtitle: 'Tu puntaje de crédito es uno de los factores clave que los prestamistas revisan cuando solicitas una hipoteca. Esto es lo que debes saber sobre los requisitos de puntaje de crédito para comprar una casa en Colorado.',
      sections: [
        {
          heading: 'Requisitos de Puntaje de Crédito por Tipo de Préstamo',
          body: 'Diferentes programas de préstamos tienen diferentes requisitos mínimos de puntaje de crédito. Los préstamos FHA generalmente requieren un puntaje mínimo de 580 para calificar para un pago inicial del 3.5%. Los préstamos convencionales a menudo requieren un puntaje mínimo de 620 o más. Los requisitos pueden variar entre prestamistas incluso para el mismo tipo de préstamo.',
        },
        {
          heading: 'Cómo Tu Puntaje de Crédito Afecta Tus Opciones',
          body: 'Tu puntaje de crédito influye no solo en si calificas para un préstamo, sino también en la tasa de interés que puedes recibir. Los puntajes de crédito más altos generalmente resultan en tasas de interés más bajas, lo que puede reducir significativamente tu pago mensual durante la vida del préstamo.',
        },
        {
          heading: '¿Puedes Comprar una Casa con un Puntaje de Crédito Más Bajo?',
          body: 'Sí, en algunos casos. Los préstamos FHA están específicamente diseñados para ser accesibles a compradores con puntajes de crédito más bajos. Si tu puntaje de crédito está por debajo de los umbrales de los préstamos convencionales, un profesional hipotecario puede ayudarte a entender qué programas aún podrías calificar.',
        },
        {
          heading: 'Pasos para Mejorar Tu Puntaje de Crédito Antes de Comprar',
          body: 'Si tu puntaje de crédito necesita mejorar antes de solicitar una hipoteca, puedes tomar medidas. Pagar los saldos de tarjetas de crédito, hacer todos los pagos a tiempo, evitar nuevas solicitudes de crédito y corregir errores en tu informe de crédito pueden tener un efecto positivo con el tiempo.',
        },
      ],
      faqs: [
        {
          question: '¿Cuál es el puntaje de crédito mínimo para comprar una casa en Colorado?',
          answer: 'El puntaje mínimo varía según el tipo de préstamo. Los préstamos FHA pueden llegar hasta 500–580, mientras que los préstamos convencionales generalmente requieren 620 o más. Un profesional hipotecario puede revisar tu puntaje y emparejarte con programas apropiados.',
        },
        {
          question: '¿Verificar mi crédito dañará mi puntaje?',
          answer: 'Verificar tu propio crédito no afecta tu puntaje. Cuando un prestamista verifica tu crédito como parte de una solicitud de hipoteca, puede tener un pequeño efecto temporal.',
        },
        {
          question: '¿Puedo comprar una casa si no tengo historial crediticio?',
          answer: 'Algunos prestamistas ofrecen programas para compradores con historial crediticio limitado o inexistente utilizando verificación de crédito alternativa, como historial de pagos de alquiler o facturas de servicios.',
        },
        {
          question: '¿Cuánto tiempo lleva mejorar un puntaje de crédito?',
          answer: 'Depende de los factores específicos que afectan tu puntaje. Pequeñas mejoras pueden ocurrir en unos pocos meses. Mejoras más significativas pueden tomar de seis meses a un año o más.',
        },
      ],
    },
  },
  {
    slug: 'how-first-time-homebuyer-grants-work',
    en: {
      metaTitle: 'How First-Time Homebuyer Grants Work in Colorado | What to Expect',
      metaDescription: 'Learn how homebuyer grant-style assistance programs work in Colorado, who may qualify, and how to access these programs through a licensed mortgage professional.',
      title: 'How First-Time Homebuyer Grants Work in Colorado',
      shortDesc: 'An explanation of how grant-style homebuyer assistance programs work in Colorado and what buyers should understand before pursuing them.',
      heroSubtitle: 'Homebuyer grant programs can sound too good to be true — but legitimate assistance programs do exist in Colorado. Here is what you need to understand about how they work.',
      sections: [
        {
          heading: 'What Are Homebuyer Grants?',
          body: "Homebuyer grants are forms of financial assistance that do not require repayment, provided the buyer meets program requirements and typically remains in the home for a minimum period. Grant-style assistance is distinct from a loan — if you meet program terms, the funds are yours to keep. In Colorado, some assistance programs are structured as grants, while others use a forgivable second mortgage that functions similarly. The exact structure varies by program.",
        },
        {
          heading: 'Grant-Style Assistance vs. Loans',
          body: "It is important to understand the difference between grant-style assistance and loan-based assistance. A grant does not need to be repaid (within program terms). A forgivable second mortgage starts as a loan but is gradually forgiven the longer you remain in the home — often becoming fully forgiven after a set number of years. A deferred second mortgage is repaid when you sell, refinance, or no longer occupy the property as your primary residence. Understanding which type of assistance you are receiving is an important part of the mortgage professional's conversation with you.",
        },
        {
          heading: 'How to Qualify for Grant-Style Assistance',
          body: "Eligibility for grant-style homebuyer assistance programs depends on income limits, purchase price limits, first-time buyer status (typically defined as not having owned a home in the past three years), credit score requirements, and completion of a homebuyer education course in many cases. Not all buyers will qualify, and program availability can change over time. A licensed Colorado mortgage professional who works with these programs regularly will have up-to-date information on what is currently available and who may qualify.",
        },
        {
          heading: 'Applying for Grant Assistance Through a Mortgage Professional',
          body: "Homebuyer grant assistance is typically accessed through participating lenders — not by applying directly to a government agency. The process begins when you work with a licensed mortgage professional who has access to current assistance programs. They will review your eligibility, identify the programs that fit your situation, and incorporate any grant assistance into your overall financing structure. Starting the conversation early in your homebuying journey gives you the most flexibility.",
        },
      ],
      faqs: [
        {
          question: 'Are first-time homebuyer grants taxable?',
          answer: 'Tax treatment of homebuyer assistance can vary depending on the program and structure. Consulting with a tax professional about your specific situation is advisable. Your mortgage professional can also provide general guidance on what to ask.',
        },
        {
          question: 'What happens if I sell my home shortly after receiving grant assistance?',
          answer: 'Many programs have residency requirements — if you sell or refinance within a certain period, you may be required to repay some or all of the assistance. Your mortgage professional will explain the specific terms of any program you receive.',
        },
        {
          question: 'Can grant assistance be used for both down payment and closing costs?',
          answer: 'Some programs allow assistance to be applied to both. Others are restricted to one or the other. Your mortgage professional will clarify how each program can be applied in your situation.',
        },
        {
          question: 'How do I know if a grant program is legitimate?',
          answer: 'Work with a licensed Colorado mortgage professional who has direct experience with these programs. Legitimate assistance programs do not require upfront fees, and reputable professionals will be transparent about how the programs work.',
        },
      ],
    },
    es: {
      metaTitle: 'Cómo Funcionan los Subsidios para Compradores de Casa por Primera Vez en Colorado',
      metaDescription: 'Aprende cómo funcionan los programas de asistencia tipo subsidio para compradores de casa en Colorado, quién puede calificar y cómo acceder a estos programas.',
      title: 'Cómo Funcionan los Subsidios para Compradores de Casa por Primera Vez en Colorado',
      shortDesc: 'Una explicación de cómo funcionan los programas de asistencia tipo subsidio para compradores de casa en Colorado y qué deben entender los compradores antes de solicitarlos.',
      heroSubtitle: 'Los programas de subsidios para compradores de casa pueden parecer demasiado buenos para ser verdad, pero existen programas de asistencia legítimos en Colorado. Esto es lo que necesitas entender sobre cómo funcionan.',
      sections: [
        {
          heading: '¿Qué Son los Subsidios para Compradores de Casa?',
          body: 'Los subsidios para compradores de casa son formas de asistencia financiera que no requieren reembolso, siempre que el comprador cumpla los requisitos del programa y generalmente permanezca en la casa por un período mínimo. En Colorado, algunos programas de asistencia están estructurados como subsidios, mientras que otros utilizan una segunda hipoteca perdonable que funciona de manera similar.',
        },
        {
          heading: 'Asistencia Tipo Subsidio vs. Préstamos',
          body: 'Es importante entender la diferencia entre la asistencia tipo subsidio y la asistencia basada en préstamos. Un subsidio no necesita ser reembolsado (dentro de los términos del programa). Una segunda hipoteca perdonable comienza como un préstamo pero se perdona gradualmente cuanto más tiempo permaneces en la casa.',
        },
        {
          heading: 'Cómo Calificar para la Asistencia Tipo Subsidio',
          body: 'La elegibilidad para los programas de asistencia tipo subsidio para compradores de vivienda depende de los límites de ingresos, los límites del precio de compra, el estado de comprador de primera vez, los requisitos de puntaje crediticio y la finalización de un curso de educación para compradores en muchos casos.',
        },
        {
          heading: 'Solicitar Asistencia de Subsidio a Través de un Profesional Hipotecario',
          body: 'La asistencia de subsidio para compradores de vivienda generalmente se accede a través de prestamistas participantes, no solicitando directamente a una agencia gubernamental. El proceso comienza cuando trabajas con un profesional hipotecario con licencia que tiene acceso a los programas de asistencia actuales.',
        },
      ],
      faqs: [
        {
          question: '¿Los subsidios para compradores de casa por primera vez están sujetos a impuestos?',
          answer: 'El tratamiento fiscal de la asistencia para compradores de vivienda puede variar según el programa y la estructura. Se recomienda consultar con un profesional fiscal sobre tu situación específica.',
        },
        {
          question: '¿Qué sucede si vendo mi casa poco después de recibir asistencia de subsidio?',
          answer: 'Muchos programas tienen requisitos de residencia: si vendes o refinancias dentro de un período determinado, es posible que debas devolver parte o toda la asistencia. Tu profesional hipotecario explicará los términos específicos.',
        },
        {
          question: '¿Se puede usar la asistencia de subsidio para el pago inicial y los costos de cierre?',
          answer: 'Algunos programas permiten que la asistencia se aplique a ambos. Tu profesional hipotecario aclarará cómo se puede aplicar cada programa en tu situación.',
        },
        {
          question: '¿Cómo sé si un programa de subsidio es legítimo?',
          answer: 'Trabaja con un profesional hipotecario con licencia en Colorado que tenga experiencia directa con estos programas. Los programas de asistencia legítimos no requieren tarifas por adelantado.',
        },
      ],
    },
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug)
}
