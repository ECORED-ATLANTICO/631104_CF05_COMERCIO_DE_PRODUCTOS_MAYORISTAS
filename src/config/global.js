export default {
  global: {
    componenteFormativo: 'Manejo de información y posventa',
    descripcionCurso:
      'Las empresas están dentro de un mercado cambiante que evoluciona a pasos gigantescos y no basta con entenderlo, es el manejo de toda la información que permitirá estar a la vanguardia y su servicio posventa las mantendrá a través del tiempo, estas son y serán las razones de éxito de las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Procesamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características, tipos y técnicas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Instrumentos de recolección de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Parámetros de calidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Normativa y confidencialidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Base de datos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Manejo de datos personales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Mediciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de mediciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herramientas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',

        numero: '5',
        titulo: 'Solicitudes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',

        numero: '6',
        titulo: 'Posventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Etapas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Proceso y procedimiento',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Garantía y normatividad',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',

        numero: '7',
        titulo: 'Técnicas y resolución de conflictos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Niveles de cumplimiento',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Mediciones y tratamiento',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/PDF.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*complementario: [
    {
      tema: '3.2 Manejo de datos personales',
      referencia:
        'Superintendencia de Industria y Comercio. (2021). Cuida tu identidad digital y protege tus datos personales.',
      tipo: 'Artículo',
      descarga: '/downloads/cuida_identidad_personal.pdf',
    },
    {
      tema: '3.2 Manejo de datos personales',
      referencia:
        'Escuela de Privacidad. (2020). Legislación en protección de datos personales en Colombia.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bvAH9ppBbbE',
    },
    {
      tema: '6. Posventa ',
      referencia: 'Canal grupojadisa. (2012). Posventa Mercedes-Ben',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yqyttSMc7ac',
    },
  ],*/
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'proceso de recopilación, modelización y análisis de datos para extraer información que sirva de apoyo a la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'almacén de datos diseñado de forma organizada, que facilita la búsqueda de la información que se necesita.',
    },
    {
      termino: '<em>Buyer</em> persona',
      significado:
        'perfil de los clientes ideales que buscan y a quien van dirigidas las empresas.',
    },
    {
      termino: 'Conflicto',
      significado:
        'situación en la que dos o más personas con intereses diferentes entran en confrontación u oposición.',
    },
    {
      termino: 'CRM',
      significado:
        '(en inglés <em>Customer Relationship Management</em>, o Gestión de las relaciones con clientes) es una solución de gestión de las relaciones con clientes, orientada normalmente a gestionar tres áreas básicas: la gestión comercial, el <em>marketing</em> y el servicio postventa o de atención al cliente.',
    },
    {
      termino: 'Experiencia al cliente',
      significado:
        'relación de una empresa con sus clientes en todos los aspectos del recorrido de compra; en resumen, es la suma total de todas las interacciones que un cliente tiene con la marca.',
    },
    {
      termino: 'Garantía',
      significado:
        'mecanismo para asegurar el cumplimiento de obligaciones y proteger los derechos de alguna de las partes en relaciones comerciales o jurídicas.',
    },
    {
      termino: 'Fidelización',
      significado:
        'concepto de <em>marketing</em> que designa la lealtad de un cliente a una marca, producto o servicio concretos.',
    },
    {
      termino: 'Medición',
      significado:
        'proceso básico para comparar unidad de medida entre sí, a partir de una serie de escalas que sirven como referencia y arroja un resultado final.',
    },
    {
      termino: 'Posventa',
      significado:
        'parte del servicio al cliente reuniendo todas las estrategias pensadas para mejorar la experiencia después de la compra y manteniendo una relación duradera con los clientes',
    },
    {
      termino: 'Solicitud',
      significado:
        'es cualquier requerimiento que llega a la empresa de manera formal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Portafolio. (s. f.).<em> Servicio posventa, tan importante como las características de bienes o servicios ofrecidos al cliente.</em>',
      link:
        'https://www.portafolio.co/economia/finanzas/servicio-posventa-importante-caracteristicas-bienes-servicios-ofrecidos-cliente-243638',
    },
    {
      referencia:
        'Samsing, C. (2021).<em> Principales indicadores de servicio posventa.<em>',
      link:
        'https://blog.nubox.com/empresas/indicadores-de-servicio-post-venta',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Huila',
        },
        {
          nombre: 'Diana Carolina Jaramillo Rojas',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Cauca',
        },
        {
          nombre: 'Esperanza Cardona Grisales',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Cauca',
        },
        {
          nombre: 'Carlos Andrés Otero Cano',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Cauca',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Erika Viviana Sandoval Rojas',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Natalia Maldonado Delgado',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Miguel Guerrero Gutiérrez',
          cargo: 'Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ludwyng Corzo García',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'John Jairo Arciniegas González',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Andrés Díaz Pinto',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
