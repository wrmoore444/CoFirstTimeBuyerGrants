import type { Dictionary } from './en'

export const es: Dictionary = {
  nav: {
    home: 'Inicio',
    howItWorks: 'C\u00f3mo Funciona',
    whoMayQualify: 'Qui\u00e9n Puede Calificar',
    counties: 'Condados',
    about: 'Nosotros',
    faq: 'Preguntas',
    contact: 'Contacto',
    switchLang: 'EN',
  },
  cta: {
    checkEligibility: 'Verificar Mi Elegibilidad',
    scheduleConsult: 'Programar una Consulta Gratuita',
    learnMore: 'Saber M\u00e1s',
    contactUs: 'Cont\u00e1ctenos',
    requestInfo: 'Solicitar Informaci\u00f3n',
  },
  home: {
    hero: {
      badge: 'Programas de Asistencia para Compradores en Colorado',
      title: '¿Podrías Calificar para Asistencia de Compra de Vivienda en Colorado?',
      subtitle:
        'Muchos compradores en Colorado podrían calificar para programas diseñados para ayudar a reducir los costos iniciales de comprar una casa.',
      microTrust:
        'Explora los programas de asistencia disponibles y habla con un profesional hipotecario de Colorado sobre tus opciones.',
      ctaPrimary: 'Verificar Mi Elegibilidad',
      ctaSecondary: 'Solicitar Información',
    },
    stats: [
      { value: 'Hasta $25K', label: 'En Posible Asistencia' },
      { value: '30+', label: 'Condados de Colorado' },
      { value: 'Gratis', label: 'Consulta' },
    ],
    programOverview: {
      eyebrow: 'Sobre Estos Programas',
      title: 'Colorado Tiene Programas Diseñados para Ayudar a los Compradores',
      body: 'Algunos compradores en Colorado podrían calificar para programas de asistencia diseñados para ayudar a reducir los costos iniciales de comprar una casa. Este sitio te ayuda a explorar las opciones disponibles y conectarte con un profesional hipotecario con licencia en Colorado que puede ayudarte a entender qué programas podrían aplicar a tu situación.',
      cta: 'Conoce el Proceso',
    },
    process: {
      eyebrow: 'Cómo Funciona',
      title: 'Tres Pasos para Explorar Tus Opciones',
      steps: [
        {
          title: 'Conoce los Programas Disponibles',
          description: 'Explora los tipos de programas de asistencia para compradores de vivienda que pueden estar disponibles en Colorado y qué factores afectan la elegibilidad.',
        },
        {
          title: 'Habla con un Profesional Hipotecario de Colorado',
          description: 'Conéctate con un profesional hipotecario con licencia en Colorado que pueda revisar tu situación y guiarte a través de las opciones específicas del programa.',
        },
        {
          title: 'Aplica la Asistencia a Tu Compra',
          description: 'Si calificas, los fondos de asistencia pueden aplicarse a tu compra de vivienda, ayudando a reducir los costos iniciales de convertirte en propietario.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Por Qué los Compradores Exploran Estos Programas',
      title: 'Los Programas de Asistencia Pueden Ayudarte',
      left: {
        title: 'Reducir los Costos Iniciales',
        body: 'Uno de los mayores obstáculos para ser propietario es el costo inicial. Los programas de asistencia pueden ayudar a reducir la cantidad que necesitas llevar al cierre.',
        items: [
          'Asistencia para el pago inicial',
          'Asistencia para los costos de cierre',
          'Sin reembolso requerido en muchos programas',
          'Puede combinarse con préstamos FHA y otros tipos',
        ],
      },
      right: {
        title: 'Obtén Claridad y Orientación',
        body: 'Entender el proceso hipotecario y los programas disponibles puede sentirse abrumador. Nuestro equipo de profesionales hipotecarios con licencia en Colorado está aquí para ayudarte — sin costo para ti.',
        items: [
          'Entiende para qué programas podrías calificar',
          'Orientación en cada paso del proceso',
          'Servicio disponible en inglés y español',
          'Consulta sin compromiso',
        ],
      },
    },
    counties: {
      eyebrow: 'Área de Servicio en Colorado',
      title: 'Atendemos Compradores en Todo Colorado',
      subtitle: 'Trabajamos con compradores en todo Colorado, incluyendo estos condados y más.',
      preview: [
        'Denver', 'Adams', 'Arapahoe', 'Jefferson', 'Douglas',
        'El Paso', 'Larimer', 'Weld', 'Boulder', 'Broomfield',
        'Mesa', 'Pueblo',
      ],
      viewAll: 'Ver Todos los Condados',
    },
    testimonials: {
      eyebrow: 'Lo Que Dicen Nuestros Clientes',
      title: 'Compradores Reales en Colorado, Resultados Reales',
      subtitle: 'Ayudamos a las familias de Colorado a dar el primer paso hacia ser propietarios.',
      items: [
        {
          heading: 'No sabía por dónde empezar.',
          quote: 'No tenía idea de que existían programas de asistencia como este. El equipo me guió en todo y hizo que el proceso fuera mucho menos intimidante. Estoy muy feliz de haber contactado.',
          author: 'Maria R.',
          location: 'Aurora, CO',
        },
        {
          heading: 'Muy conocedores y serviciales.',
          quote: 'Respondieron cada pregunta que tenía y nunca me hicieron sentir presionado. Siempre sentí que tenían mi mejor interés en mente. Muy recomendados.',
          author: 'James T.',
          location: 'Fort Collins, CO',
        },
        {
          heading: 'El proceso fue más simple de lo esperado.',
          quote: 'Estaba nervioso por comprar mi primera casa, pero lo hicieron todo claro y manejable. No habría conocido estos programas sin ellos.',
          author: 'Sandra L.',
          location: 'Colorado Springs, CO',
        },
      ],
    },
    eligibilityForm: {
      eyebrow: 'Comenzar',
      title: 'Verifica Tu Elegibilidad',
      subtitle: 'Completa el formulario y un profesional hipotecario con licencia en Colorado te contactará para discutir tus opciones. Sin costo y sin compromiso.',
      reassurance: 'No hay costo para explorar tu elegibilidad, y hablar con un profesional hipotecario no te obliga a solicitar un préstamo.',
    },
    homeFaq: {
      eyebrow: 'Preguntas Comunes',
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Quién puede calificar para los programas de asistencia?',
          answer: 'La elegibilidad varía según el programa y depende de factores como los ingresos del hogar, la ubicación, el precio de compra y si eres comprador por primera vez. Un profesional hipotecario puede ayudarte a determinar para qué programas podrías calificar.',
        },
        {
          question: '¿Tengo que ser comprador de casa por primera vez?',
          answer: 'No siempre. Algunos programas están disponibles para compradores que no han sido propietarios en los últimos tres años, mientras que otros pueden tener requisitos diferentes. Podemos ayudarte a entender las reglas específicas de cada programa.',
        },
        {
          question: '¿Se puede usar la asistencia con préstamos FHA u otros tipos?',
          answer: 'En muchos casos, sí. Algunos programas de asistencia están diseñados para funcionar junto con préstamos FHA, préstamos convencionales y otras opciones de financiamiento. La compatibilidad del programa depende del programa y el prestamista específicos.',
        },
        {
          question: '¿Cómo sé qué programas están disponibles para mí?',
          answer: 'La mejor manera es hablar con un profesional hipotecario con licencia en Colorado que se especialice en estos programas. Completa el formulario de arriba y nos comunicaremos para discutir tu situación específica.',
        },
      ],
      viewAll: 'Ver Todas las Preguntas',
    },
    finalCta: {
      title: '¿Listo para Explorar Tus Opciones?',
      subtitle: 'Habla con un profesional hipotecario con licencia en Colorado sin costo. Conoce para qué programas podrías calificar.',
      primary: 'Verificar Mi Elegibilidad',
      secondary: 'Programar una Consulta',
    },
  },
  howItWorks: {
    hero: {
      badge: 'El Proceso',
      title: 'Tres Pasos Hacia Tu Subvenci\u00f3n',
      subtitle: 'Hemos simplificado el camino hacia la propiedad de vivienda. Esto es exactamente lo que puedes esperar.',
    },
    steps: [
      {
        number: '1',
        title: 'Verifica Tu Elegibilidad',
        description: 'Completa nuestro formulario r\u00e1pido \u2014 sin compromiso, sin consulta de cr\u00e9dito. Te informaremos de inmediato para qu\u00e9 puedes calificar.',
      },
      {
        number: '2',
        title: 'Habla Con Nuestro Equipo',
        description: 'Revisaremos tu situaci\u00f3n y te explicaremos todas las opciones de subvenci\u00f3n disponibles para ti, completamente gratis.',
      },
      {
        number: '3',
        title: 'Cierra Tu Casa',
        description: 'Los fondos de la subvenci\u00f3n se aplican directamente al cierre. Sin reembolso \u2014 nunca. Sales con las llaves y el dinero a\u00fan en tu bolsillo.',
      },
    ],
    cta: {
      title: '\u00bfListo Para Comenzar?',
      subtitle: 'Verifica tu elegibilidad hoy \u2014 solo toma un minuto.',
      primary: 'Verificar Mi Elegibilidad',
    },
  },
  whoQualifies: {
    hero: {
      badge: 'Elegibilidad',
      title: '\u00bfQui\u00e9n Puede Calificar?',
      subtitle: 'Es posible que est\u00e9s m\u00e1s cerca de calificar de lo que crees. Aqu\u00ed est\u00e1n los criterios clave.',
    },
    criteria: [
      { title: 'Comprador por Primera Vez (o Sin Casa en 3 A\u00f1os)', description: 'No necesitas ser un comprador completamente nuevo. Si no has tenido casa en los \u00faltimos 3 a\u00f1os, puedes calificar.' },
      { title: 'Residente de Colorado', description: 'Debes estar comprando una casa en el estado de Colorado.' },
      { title: 'Ingresos Dentro de los L\u00edmites del Programa', description: 'Los l\u00edmites de ingresos var\u00edan por condado y tama\u00f1o del hogar. Muchos compradores de ingresos medios califican.' },
      { title: 'Solo Residencia Principal', description: 'La casa debe ser tu residencia principal, no una propiedad de inversi\u00f3n ni casa de vacaciones.' },
      { title: 'Puntaje de Cr\u00e9dito M\u00ednimo', description: 'La mayor\u00eda de los programas requieren un puntaje m\u00ednimo. Nuestro equipo revisar\u00e1 tu situaci\u00f3n completa.' },
      { title: 'Completar un Curso de Educaci\u00f3n para Compradores', description: 'La mayor\u00eda de los programas requieren un curso corto en l\u00ednea. Te guiaremos en cada paso.' },
    ],
    disclaimer: 'Los requisitos de elegibilidad var\u00edan por programa. Cont\u00e1ctanos para una evaluaci\u00f3n personalizada.',
    cta: {
      title: '\u00bfNo Est\u00e1s Seguro Si Calificas?',
      subtitle: 'D\u00e9janos revisar por ti. Es gratis, r\u00e1pido y sin compromiso.',
      primary: 'Verificar Mi Elegibilidad',
    },
  },
  counties: {
    hero: {
      badge: '\u00c1rea de Servicio',
      title: 'Atendemos Compradores en Todo Colorado',
      subtitle: 'Nuestro equipo trabaja con compradores en m\u00e1s de 30 condados de Colorado.',
    },
    list: [
      'Adams', 'Arapahoe', 'Boulder', 'Broomfield', 'Chaffee',
      'Clear Creek', 'Denver', 'Douglas', 'Eagle', 'El Paso',
      'Elbert', 'Fremont', 'Garfield', 'Gilpin', 'Grand',
      'Jefferson', 'Lake', 'Larimer', 'Mesa', 'Moffat',
      'Montrose', 'Morgan', 'Park', 'Pitkin', 'Pueblo',
      'Rio Blanco', 'Routt', 'Saguache', 'Summit', 'Teller',
      'Weld',
    ],
    disclaimer: 'La disponibilidad del programa var\u00eda por condado. Cont\u00e1ctanos para confirmar la cobertura en tu \u00e1rea.',
    cta: {
      title: '\u00bfNo Ves Tu Condado?',
      subtitle: 'Comun\u00edcate con nosotros \u2014 es posible que haya cobertura disponible.',
      primary: 'Cont\u00e1ctenos',
    },
  },
  about: {
    hero: {
      badge: 'Nosotros',
      title: 'Construido Para Tu \u00c9xito',
      subtitle: 'CoFirstTimeBuyerGrants fue creado para ayudar a los compradores de Colorado a acceder a programas que la mayor\u00eda de las personas nunca conoce.',
    },
    mission: {
      eyebrow: 'Nuestra Misi\u00f3n',
      title: 'Haciendo Real La Propiedad de Vivienda',
      body: 'Nos encargamos de la complejidad para que t\u00fa no tengas que hacerlo. Nuestros especialistas hipotecarios con licencia en Colorado conocen cada programa de subvenci\u00f3n del estado.',
    },
    values: [
      { title: 'Sin Presi\u00f3n', description: 'Avanzamos a tu ritmo. Cero compromiso, siempre.' },
      { title: 'Gratis Para Ti', description: 'Nos pagan al cierre el prestamista \u2014 nunca t\u00fa por adelantado.' },
      { title: 'Conocimiento Local Profundo', description: 'M\u00e1s de 30 condados, cada programa activo, actualizado regularmente.' },
      { title: 'Equipo Biling\u00fce', description: 'Servicio en ingl\u00e9s y espa\u00f1ol, siempre.' },
    ],
    compliance: {
      eyebrow: 'Licencias y Cumplimiento',
      nmls: 'NMLS# [TBD]',
      equalHousing: 'Igualdad de Oportunidades de Vivienda',
      licensed: 'Con Licencia en el Estado de Colorado',
      disclosure: 'CoFirstTimeBuyerGrants es un servicio de corretaje hipotecario. Todos los programas de subvenci\u00f3n est\u00e1n sujetos a disponibilidad, elegibilidad del prestatario y aprobaci\u00f3n del prestamista.',
    },
    cta: {
      title: '\u00bfListo Para Dar El Primer Paso?',
      subtitle: 'Conec\u00edtate con nuestro equipo \u2014 sin costo, sin compromiso.',
      primary: 'Cont\u00e1ctenos',
    },
  },
  faq: {
    hero: {
      badge: 'Preguntas Frecuentes',
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas r\u00e1pidas a las preguntas que m\u00e1s escuchamos.',
    },
    items: [
      { question: '\u00bfTengo que devolver el dinero de la subvenci\u00f3n?', answer: 'No. Los fondos de la subvenci\u00f3n no necesitan ser devueltos siempre que cumplas los requisitos del programa.' },
      { question: '\u00bfCu\u00e1l es el monto m\u00e1ximo de la subvenci\u00f3n?', answer: 'Hasta $25,000, dependiendo del programa y tu elegibilidad.' },
      { question: '\u00bfNecesito ser comprador por primera vez?', answer: 'No necesariamente. Si no has tenido casa en los \u00faltimos 3 a\u00f1os, puedes calificar bajo la mayor\u00eda de los programas.' },
      { question: '\u00bfHay una consulta de cr\u00e9dito dif\u00edcil?', answer: 'No se requiere consulta de cr\u00e9dito para verificar tu elegibilidad o hablar con nuestro equipo.' },
      { question: '\u00bfCu\u00e1nto tiempo tarda el proceso?', answer: 'El tiempo var\u00eda, pero la mayor\u00eda de los compradores cierran dentro de 30\u201360 d\u00edas de comenzar el proceso.' },
      { question: '\u00bfEste servicio es gratuito?', answer: 'S\u00ed. Nuestro equipo recibe pago al cierre del prestamista. No hay costo para ti, nunca.' },
      { question: '\u00bfAtiendes a compradores de habla hispana?', answer: 'S\u00ed. Nuestro equipo ofrece servicio completo en ingl\u00e9s y espa\u00f1ol.' },
      { question: '\u00bfQu\u00e9 condados atienden?', answer: 'Atendemos compradores en m\u00e1s de 30 condados de Colorado. Consulta nuestra p\u00e1gina de Condados.' },
    ],
    cta: {
      title: '\u00bfTodav\u00eda Tienes Preguntas?',
      subtitle: 'Con gusto te ayudamos. Comun\u00edcate y te responderemos pronto.',
      primary: 'Cont\u00e1ctenos',
    },
  },
  contact: {
    hero: {
      badge: 'Hablemos',
      title: '\u00bfListo Para Saber Si Calificas?',
      subtitle: 'Completa el formulario y nos comunicaremos contigo para explicarte tus opciones \u2014 sin ning\u00fan compromiso.',
    },
    info: {
      phoneLabel: 'Tel\u00e9fono',
      phoneValue: '[Tel\u00e9fono TBD]',
      emailLabel: 'Correo Electr\u00f3nico',
      emailValue: '[Correo TBD]',
      servingLabel: 'Atendiendo a',
      servingText: 'Compradores en todo Colorado',
    },
    form: {
      title: 'Cu\u00e9ntanos Sobre Ti',
      subtitle: 'Completa el formulario y un miembro de nuestro equipo se pondr\u00e1 en contacto contigo pronto.',
      firstName: 'Nombre',
      firstNamePlaceholder: 'Juan',
      lastName: 'Apellido',
      lastNamePlaceholder: 'Garc\u00eda',
      email: 'Correo electr\u00f3nico',
      emailPlaceholder: 'juan@ejemplo.com',
      phone: 'Teléfono',
      phonePlaceholder: '(720) 555-0100',
      county: 'Condado',
      countyPlaceholder: 'Selecciona tu condado',
      message: 'Mensaje',
      messagePlaceholder: 'Cu\u00e9ntanos sobre tus metas de compra de vivienda...',
      submit: 'Enviar Mi Solicitud',
      thankYouHeading: '\u00a1Todo Listo!',
      thankYouMessage: 'Tenemos tu informaci\u00f3n y nos comunicaremos pronto.',
      sendAnother: 'Enviar Otra Solicitud',
    },
  },
  footer: {
    description: 'Conectando a compradores en Colorado con los programas de subvenci\u00f3n que hacen posible la propiedad de vivienda.',
    quickLinks: 'Enlaces R\u00e1pidos',
    contactInfo: 'Cont\u00e1ctenos',
    legal: 'Legal',
    privacyPolicy: 'Pol\u00edtica de Privacidad',
    terms: 'T\u00e9rminos de Servicio',
    equalHousing: 'Igualdad de Oportunidades de Vivienda',
    nmls: 'NMLS# [TBD]',
    licensed: 'Con Licencia en Colorado',
    copyright: 'CoFirstTimeBuyerGrants. Todos los derechos reservados.',
    disclosure: 'Esto no es un compromiso de pr\u00e9stamo. Todos los pr\u00e9stamos sujetos a aprobaci\u00f3n de cr\u00e9dito. Disponibilidad del programa sujeta a cambios.',
  },
}
