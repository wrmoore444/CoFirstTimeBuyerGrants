export interface CountyContent {
  name: string
  shortDesc: string
  heroSubtitle: string
  marketEyebrow: string
  marketBody: string
  programBody: string
}

export interface CountyData {
  slug: string
  en: CountyContent
  es: CountyContent
}

export const COUNTIES: CountyData[] = [
  {
    slug: 'denver',
    en: {
      name: 'Denver County',
      shortDesc: "Colorado's most populous county and state capital, with diverse neighborhoods and strong housing demand.",
      heroSubtitle: 'Qualified buyers in Denver County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in one of Colorado\'s most competitive markets.',
      marketEyebrow: 'Denver County Housing Market',
      marketBody: "Denver County is Colorado's most populous county and home to the state capital. The city offers diverse neighborhoods — from historic Capitol Hill and LoDo to the rapidly developing RiNo Arts District. Denver's strong economy and ongoing population growth have made it one of the most sought-after housing markets in the Mountain West. First-time buyers often face competitive conditions, making awareness of assistance programs especially valuable.",
      programBody: "Buyers in Denver County may have access to homebuyer assistance programs designed to help reduce upfront costs such as down payment and closing cost contributions. These programs can vary based on income, purchase price, and other eligibility factors. Speaking with a licensed Colorado mortgage professional is the best way to understand which programs may apply to your specific situation.",
    },
    es: {
      name: 'Condado de Denver',
      shortDesc: "El condado más poblado de Colorado y capital del estado, con vecindarios diversos y fuerte demanda de vivienda.",
      heroSubtitle: 'Los compradores calificados en el Condado de Denver pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en uno de los mercados más competitivos de Colorado.',
      marketEyebrow: 'Mercado de Vivienda del Condado de Denver',
      marketBody: "El Condado de Denver es el condado más poblado de Colorado y sede de la capital del estado. La ciudad ofrece vecindarios diversos, desde el histórico Capitol Hill y LoDo hasta el en desarrollo Distrito de las Artes RiNo. La fuerte economía de Denver y el continuo crecimiento poblacional lo han convertido en uno de los mercados de vivienda más buscados del oeste de las Montañas Rocosas.",
      programBody: "Los compradores en el Condado de Denver pueden tener acceso a programas de asistencia para compradores diseñados para ayudar a reducir los costos iniciales, como contribuciones para el pago inicial y costos de cierre. Estos programas pueden variar según los ingresos, el precio de compra y otros factores de elegibilidad.",
    },
  },
  {
    slug: 'adams',
    en: {
      name: 'Adams County',
      shortDesc: 'A growing county north of Denver including Aurora, Westminster, Thornton, and Northglenn.',
      heroSubtitle: 'Qualified buyers in Adams County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in this growing northern metro area.',
      marketEyebrow: 'Adams County Housing Market',
      marketBody: "Adams County lies just north of Denver and encompasses diverse communities including Aurora, Westminster, Thornton, and Northglenn. The county offers a range of housing options at varying price points, providing more accessible entry points compared to some neighboring counties. Its proximity to Denver and established infrastructure continue to attract first-time buyers and growing families.",
      programBody: "Buyers in Adams County may qualify for homebuyer assistance programs that can help reduce the upfront costs associated with purchasing a home. Down payment assistance and closing cost programs may be available to eligible buyers based on income and other qualification criteria. A licensed Colorado mortgage professional can help you identify the right programs for your situation.",
    },
    es: {
      name: 'Condado de Adams',
      shortDesc: 'Un condado en crecimiento al norte de Denver que incluye Aurora, Westminster, Thornton y Northglenn.',
      heroSubtitle: 'Los compradores calificados en el Condado de Adams pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en esta creciente área metropolitana del norte.',
      marketEyebrow: 'Mercado de Vivienda del Condado de Adams',
      marketBody: "El Condado de Adams se encuentra justo al norte de Denver y abarca diversas comunidades, incluyendo Aurora, Westminster, Thornton y Northglenn. El condado ofrece una variedad de opciones de vivienda a distintos precios, proporcionando puntos de entrada más accesibles en comparación con algunos condados vecinos.",
      programBody: "Los compradores en el Condado de Adams pueden calificar para programas de asistencia para compradores de vivienda que pueden ayudar a reducir los costos iniciales asociados con la compra de una casa. Los programas de asistencia para pago inicial y costos de cierre pueden estar disponibles para compradores elegibles según sus ingresos y otros criterios de calificación.",
    },
  },
  {
    slug: 'arapahoe',
    en: {
      name: 'Arapahoe County',
      shortDesc: 'Borders Denver to the east and south, including Aurora, Englewood, Centennial, and Littleton.',
      heroSubtitle: 'Qualified buyers in Arapahoe County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in this established metro county.',
      marketEyebrow: 'Arapahoe County Housing Market',
      marketBody: "Arapahoe County borders Denver to the east and south, encompassing well-established communities such as Aurora, Englewood, Centennial, and Littleton. The county features a mix of urban density, suburban neighborhoods, and growing commercial corridors. Its central location within the Denver metro area makes it popular with buyers who want access to employment centers without the higher price points of some urban core neighborhoods.",
      programBody: "Homebuyer assistance programs may be available to eligible buyers in Arapahoe County, potentially helping to reduce down payment requirements and closing cost burdens. Program eligibility typically depends on household income, purchase price limits, and first-time buyer status. Consulting with a licensed Colorado mortgage professional is the most reliable way to determine your options.",
    },
    es: {
      name: 'Condado de Arapahoe',
      shortDesc: 'Limita con Denver al este y al sur, incluyendo Aurora, Englewood, Centennial y Littleton.',
      heroSubtitle: 'Los compradores calificados en el Condado de Arapahoe pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en este establecido condado metropolitano.',
      marketEyebrow: 'Mercado de Vivienda del Condado de Arapahoe',
      marketBody: "El Condado de Arapahoe limita con Denver al este y al sur, y abarca comunidades bien establecidas como Aurora, Englewood, Centennial y Littleton. El condado presenta una mezcla de densidad urbana, vecindarios suburbanos y corredores comerciales en crecimiento.",
      programBody: "Los programas de asistencia para compradores de vivienda pueden estar disponibles para compradores elegibles en el Condado de Arapahoe, ayudando potencialmente a reducir los requisitos de pago inicial y la carga de costos de cierre. La elegibilidad del programa generalmente depende de los ingresos del hogar, los límites del precio de compra y el estado de comprador por primera vez.",
    },
  },
  {
    slug: 'jefferson',
    en: {
      name: 'Jefferson County',
      shortDesc: "Known as 'Jeffco,' west of Denver with Lakewood, Arvada, and gateway communities to the foothills.",
      heroSubtitle: "Qualified buyers in Jefferson County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in Colorado's western metro corridor.",
      marketEyebrow: 'Jefferson County Housing Market',
      marketBody: "Jefferson County, commonly known as 'Jeffco,' lies west of Denver and includes Lakewood, Arvada, Wheat Ridge, and Golden — gateway communities to Colorado's foothills and mountain recreation areas. The county appeals to buyers seeking proximity to Denver's job market alongside access to outdoor amenities. Neighborhoods range from urban infill to established residential communities.",
      programBody: "Buyers in Jefferson County may qualify for homebuyer assistance programs that could help offset the upfront costs of purchasing a home. These programs may assist with down payment contributions or closing cost coverage, depending on eligibility. A licensed Colorado mortgage professional can review your situation and identify which programs may be a fit.",
    },
    es: {
      name: 'Condado de Jefferson',
      shortDesc: "Conocido como 'Jeffco,' al oeste de Denver con Lakewood, Arvada y comunidades de acceso a las estribaciones.",
      heroSubtitle: "Los compradores calificados en el Condado de Jefferson pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en el corredor metropolitano oeste de Colorado.",
      marketEyebrow: 'Mercado de Vivienda del Condado de Jefferson',
      marketBody: "El Condado de Jefferson, comúnmente conocido como 'Jeffco,' se encuentra al oeste de Denver e incluye Lakewood, Arvada, Wheat Ridge y Golden, comunidades de acceso a las estribaciones y zonas de recreación montañosa de Colorado.",
      programBody: "Los compradores en el Condado de Jefferson pueden calificar para programas de asistencia para compradores de vivienda que podrían ayudar a compensar los costos iniciales de la compra de una casa. Estos programas pueden ayudar con contribuciones para el pago inicial o cobertura de costos de cierre, según la elegibilidad.",
    },
  },
  {
    slug: 'douglas',
    en: {
      name: 'Douglas County',
      shortDesc: "One of Colorado's fastest-growing counties, home to Castle Rock, Parker, and Highlands Ranch.",
      heroSubtitle: 'Qualified buyers in Douglas County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in this rapidly growing south metro community.',
      marketEyebrow: 'Douglas County Housing Market',
      marketBody: "Douglas County is one of Colorado's fastest-growing counties, featuring planned communities and family-oriented neighborhoods in Castle Rock, Parker, and Highlands Ranch. The area is known for newer construction, quality schools, and a strong sense of community. Its location between Denver and Colorado Springs attracts buyers who want suburban space with access to two major employment centers.",
      programBody: "Eligible buyers in Douglas County may have access to homebuyer assistance programs designed to support first-time buyers navigating this competitive and fast-growing market. Programs may help reduce down payment requirements or closing cost burdens, depending on income and other qualifying factors. Speaking with a Colorado mortgage professional is the best way to identify current options.",
    },
    es: {
      name: 'Condado de Douglas',
      shortDesc: "Uno de los condados de más rápido crecimiento de Colorado, hogar de Castle Rock, Parker y Highlands Ranch.",
      heroSubtitle: 'Los compradores calificados en el Condado de Douglas pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en esta comunidad de rápido crecimiento al sur de la metrópoli.',
      marketEyebrow: 'Mercado de Vivienda del Condado de Douglas',
      marketBody: "El Condado de Douglas es uno de los condados de más rápido crecimiento de Colorado, con comunidades planificadas y vecindarios orientados a familias en Castle Rock, Parker y Highlands Ranch. El área es conocida por sus construcciones nuevas, escuelas de calidad y un fuerte sentido de comunidad.",
      programBody: "Los compradores elegibles en el Condado de Douglas pueden tener acceso a programas de asistencia para compradores de vivienda diseñados para apoyar a los compradores que navegan este competitivo y creciente mercado. Los programas pueden ayudar a reducir los requisitos de pago inicial o la carga de costos de cierre, según los ingresos y otros factores de calificación.",
    },
  },
  {
    slug: 'el-paso',
    en: {
      name: 'El Paso County',
      shortDesc: "Colorado's second most populous county and home to Colorado Springs, with diverse housing options.",
      heroSubtitle: "Qualified buyers in El Paso County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in Colorado's second-largest metro area.",
      marketEyebrow: 'El Paso County Housing Market',
      marketBody: "El Paso County is Colorado's second most populous county and home to Colorado Springs, the state's second-largest city. The county offers a broad range of housing options — from established neighborhoods near downtown Colorado Springs to newer developments in surrounding communities. The presence of military installations and a growing tech sector contribute to steady housing demand.",
      programBody: "Buyers in El Paso County may qualify for homebuyer assistance programs that can help reduce the upfront cost of purchasing a home. Down payment assistance and other program options may be available to eligible buyers based on income, location, and other qualifying criteria. A licensed Colorado mortgage professional can help you understand your options.",
    },
    es: {
      name: 'Condado de El Paso',
      shortDesc: "El segundo condado más poblado de Colorado y hogar de Colorado Springs, con diversas opciones de vivienda.",
      heroSubtitle: "Los compradores calificados en el Condado de El Paso pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en la segunda área metropolitana más grande de Colorado.",
      marketEyebrow: 'Mercado de Vivienda del Condado de El Paso',
      marketBody: "El Condado de El Paso es el segundo condado más poblado de Colorado y sede de Colorado Springs, la segunda ciudad más grande del estado. El condado ofrece una amplia gama de opciones de vivienda, desde vecindarios establecidos cerca del centro de Colorado Springs hasta nuevos desarrollos en comunidades circundantes.",
      programBody: "Los compradores en el Condado de El Paso pueden calificar para programas de asistencia para compradores de vivienda que pueden ayudar a reducir los costos iniciales de comprar una casa. Las opciones de asistencia para pago inicial y otros programas pueden estar disponibles para compradores elegibles según sus ingresos, ubicación y otros criterios de calificación.",
    },
  },
  {
    slug: 'larimer',
    en: {
      name: 'Larimer County',
      shortDesc: "Home to Fort Collins, Loveland, and Estes Park — a vibrant market combining university-town energy with natural beauty.",
      heroSubtitle: 'Qualified buyers in Larimer County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in this vibrant northern Colorado market.',
      marketEyebrow: 'Larimer County Housing Market',
      marketBody: "Larimer County is home to Fort Collins, Loveland, and Estes Park, offering a compelling mix of university-town energy, outdoor recreation access, and strong local economies. Fort Collins — anchored by Colorado State University — has consistently ranked among Colorado's most desirable mid-size cities. The county attracts first-time buyers drawn to its quality of life and employment opportunities in education, healthcare, and technology.",
      programBody: "Homebuyer assistance programs may be available to qualified buyers in Larimer County, potentially helping to offset down payment and closing cost expenses. Eligibility requirements vary by program and are based on factors including income, purchase price, and buyer status. A Colorado mortgage professional can walk you through the programs that may currently be available.",
    },
    es: {
      name: 'Condado de Larimer',
      shortDesc: "Hogar de Fort Collins, Loveland y Estes Park, un vibrante mercado que combina la energía universitaria con la belleza natural.",
      heroSubtitle: 'Los compradores calificados en el Condado de Larimer pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en este vibrante mercado del norte de Colorado.',
      marketEyebrow: 'Mercado de Vivienda del Condado de Larimer',
      marketBody: "El Condado de Larimer es el hogar de Fort Collins, Loveland y Estes Park, ofreciendo una atractiva combinación de energía universitaria, acceso a recreación al aire libre y economías locales sólidas. Fort Collins, anclada por la Universidad Estatal de Colorado, se ha clasificado consistentemente entre las ciudades medianas más deseables de Colorado.",
      programBody: "Los programas de asistencia para compradores de vivienda pueden estar disponibles para compradores calificados en el Condado de Larimer, ayudando potencialmente a compensar los gastos de pago inicial y costos de cierre. Los requisitos de elegibilidad varían según el programa y se basan en factores que incluyen ingresos, precio de compra y estado del comprador.",
    },
  },
  {
    slug: 'weld',
    en: {
      name: 'Weld County',
      shortDesc: 'A rapidly growing county with Greeley, Evans, and Windsor offering accessible housing options.',
      heroSubtitle: 'Qualified buyers in Weld County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in this growing northern Colorado community.',
      marketEyebrow: 'Weld County Housing Market',
      marketBody: "Weld County has experienced significant population growth, with communities like Greeley, Evans, Windsor, and Severance offering more accessible housing price points compared to neighboring Denver metro counties. The county's agricultural heritage and expanding residential development make it an attractive option for buyers seeking space and value. Its location between Denver and Fort Collins provides access to both metro job markets.",
      programBody: "Buyers in Weld County may qualify for homebuyer assistance programs that could help make homeownership more accessible in this growing region. Assistance programs may address down payment requirements and closing costs for eligible buyers. A licensed Colorado mortgage professional can review your eligibility and identify programs currently available in your area.",
    },
    es: {
      name: 'Condado de Weld',
      shortDesc: 'Un condado de rápido crecimiento con Greeley, Evans y Windsor que ofrece opciones de vivienda accesibles.',
      heroSubtitle: 'Los compradores calificados en el Condado de Weld pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en esta creciente comunidad del norte de Colorado.',
      marketEyebrow: 'Mercado de Vivienda del Condado de Weld',
      marketBody: "El Condado de Weld ha experimentado un crecimiento poblacional significativo, con comunidades como Greeley, Evans, Windsor y Severance que ofrecen precios de vivienda más accesibles en comparación con los condados vecinos del área metropolitana de Denver.",
      programBody: "Los compradores en el Condado de Weld pueden calificar para programas de asistencia para compradores de vivienda que podrían ayudar a hacer más accesible la propiedad de vivienda en esta región en crecimiento. Los programas de asistencia pueden abordar los requisitos de pago inicial y los costos de cierre para compradores elegibles.",
    },
  },
  {
    slug: 'boulder',
    en: {
      name: 'Boulder County',
      shortDesc: 'Known for its university character, natural setting, and strong economy — including Boulder, Longmont, and Louisville.',
      heroSubtitle: "Qualified buyers in Boulder County may be eligible for programs designed to help reduce the upfront cost of purchasing a home in one of Colorado's most desirable markets.",
      marketEyebrow: 'Boulder County Housing Market',
      marketBody: "Boulder County is known for its vibrant university-town character, stunning natural setting, and strong innovation economy. Communities include Boulder, Longmont, Lafayette, Louisville, and Erie. Home prices in the county tend to reflect strong demand and limited inventory, particularly in the city of Boulder. Many buyers find that awareness of assistance programs is especially valuable when entering this market.",
      programBody: "Eligible buyers in Boulder County may qualify for assistance programs designed to help reduce the upfront costs of entering one of Colorado's most desirable housing markets. These programs may assist with down payment contributions or closing cost coverage, subject to income limits and other qualifying criteria. Connecting with a licensed Colorado mortgage professional is the best next step.",
    },
    es: {
      name: 'Condado de Boulder',
      shortDesc: 'Conocido por su carácter universitario, entorno natural y economía sólida, incluyendo Boulder, Longmont y Louisville.',
      heroSubtitle: "Los compradores calificados en el Condado de Boulder pueden ser elegibles para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa en uno de los mercados más deseables de Colorado.",
      marketEyebrow: 'Mercado de Vivienda del Condado de Boulder',
      marketBody: "El Condado de Boulder es conocido por su vibrante carácter universitario, su impresionante entorno natural y su sólida economía de innovación. Las comunidades incluyen Boulder, Longmont, Lafayette, Louisville y Erie. Los precios de las viviendas en el condado tienden a reflejar una fuerte demanda y un inventario limitado.",
      programBody: "Los compradores elegibles en el Condado de Boulder pueden calificar para programas de asistencia diseñados para ayudar a reducir los costos iniciales de ingresar a uno de los mercados de vivienda más deseables de Colorado. Estos programas pueden ayudar con contribuciones para el pago inicial o cobertura de costos de cierre, sujeto a límites de ingresos y otros criterios de calificación.",
    },
  },
]

export function getCounty(slug: string): CountyData | undefined {
  return COUNTIES.find((c) => c.slug === slug)
}

export function getCountySlugs(): string[] {
  return COUNTIES.map((c) => c.slug)
}
