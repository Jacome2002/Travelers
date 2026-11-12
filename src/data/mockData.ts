import { PlanOption, GuestInfo, DriverInfo, MaritimeBulletin, MaritimeStation, ChatMessage } from '../types';

export const GUEST_DATA: GuestInfo = {
  name: 'Camilo Restrepo',
  party: 'Familia Restrepo (4 personas)',
  partyDetails: '2 adultos + 2 niños (Sofía 8 años, Mateo 5 años)',
  hotel: 'Hotel Las Américas Casa de Playa • Bocagrande',
  originalTour: 'Tour Catamarán VIP Islas del Rosario & Barú',
  reservationId: 'RES-CT-8924',
  originalDepartureTime: '08:30 AM (Muelle La Bodeguita)',
};

export const DRIVER_DATA: DriverInfo = {
  name: 'Carlos Mendoza',
  phone: '+57 312 849 2011',
  vehicle: 'Mercedes-Benz Sprinter Executive Climatizada',
  plate: 'WDF-482',
  photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  rating: 4.98,
  estimatedArrivalMinutes: 14,
  currentLocation: 'Avenida Santander a 1.8 km del hotel',
};

export const CONCIERGE_DATA = {
  name: 'Valentina Gómez',
  title: 'Concierge VIP Cartagena & Islas',
  phone: '+57 300 918 3400',
  whatsappUrl: 'https://wa.me/573009183400?text=Hola%20Valentina%2C%20tengo%20una%20consulta%20sobre%20el%20Plan%20B%20de%20mi%20familia%20(Reserva%20RES-CT-8924)',
  avatar: '/src/assets/images/concierge_avatar_1794496841113.jpg',
  badgeText: 'Certificada DIMAR & Cotelco',
  status: 'Disponible ahora',
};

export const RESCUE_PLANS: PlanOption[] = [
  {
    id: 'plan_a',
    title: 'Castillo San Felipe VIP & Almuerzo Colonial',
    tagline: 'Historia viva, túneles secretos y alta gastronomía caribeña',
    badge: 'Opción Cultural & Aventura',
    badgeColor: 'bg-[#ffdbce] text-[#7f2b00] border-[#fd651e]/30',
    category: 'cultural',
    image: '/src/assets/images/castillo_san_felipe_1794496842322.jpg',
    secondaryImage: '/src/assets/images/dining_colonial_1794496843798.jpg',
    schedule: 'Salida 09:15 AM • Retorno al hotel 03:30 PM',
    duration: '6 horas de experiencia',
    costLabel: '$0 COP adicional',
    realValueCOP: '$680.000 COP',
    savingsCOP: '100% Cubierto por Garantía Plan B',
    logisticsText: 'Van privada Mercedes esperando en lobby (WDF-482)',
    idealFor: 'Familias con niños curiosos, amantes de la historia y sibaritas',
    kidsFriendlyNote: 'Incluye mapa del tesoro pirata y merienda especial para Sofía y Mateo',
    highlights: [
      'Acceso preferencial Fast-Track al Castillo San Felipe sin filas bajo el sol',
      'Historiador privado bilingüe caracterizado en relatos de piratas',
      'Almuerzo colonial gourmet de 3 tiempos en restaurante patrimonial aliado',
      'Degustación de café de origen de la Sierra Nevada para adultos',
      'Transporte privado con aire acondicionado y botellas de agua fría',
    ],
    includedList: [
      '4 entradas VIP al Castillo San Felipe',
      'Guía privado exclusivo durante todo el recorrido',
      'Almuerzo completo para 4 comensales (menú especial infantil para los 2 niños)',
      'Transporte puerta a puerta desde y hacia Hotel Las Américas',
      'Seguro médico y de asistencia Colasistencia Premium',
    ],
  },
  {
    id: 'plan_b',
    title: 'Spa de Lujo & Day Pass en Claustro Colonial',
    tagline: 'Día de descanso absoluto, piscinas turquesa y circuito hidrotermal',
    badge: 'Opción Relax & Bienestar',
    badgeColor: 'bg-[#d3e4fe] text-[#0b1c30] border-[#565e74]/30',
    category: 'wellness',
    image: '/src/assets/images/luxury_spa_pool_1794496842577.jpg',
    schedule: 'Acceso inmediato desde 09:30 AM • Cierre 06:00 PM',
    duration: 'Todo el día a tu propio ritmo',
    costLabel: '$0 COP adicional',
    realValueCOP: '$720.000 COP',
    savingsCOP: '100% Cubierto por Garantía Plan B',
    logisticsText: 'Traslado privado directo al claustro en 15 minutos',
    idealFor: 'Familias que buscan desconexión, comodidad y mimos de primer nivel',
    kidsFriendlyNote: 'Kids Club con monitora certificada, piscina infantil y helados artesanales',
    highlights: [
      'Pase familiar exclusivo en claustro patrimonial 5 estrellas (Sofitel / Hyatt)',
      'Circuito hidrotermal (sauna, turco, cascadas) + masaje de 45 min para adultos',
      'Piscina central con camastros reservados bajo palmeras tropicales',
      'Almuerzo buffet o a la carta servido junto a la piscina con cócteles de autor',
      'Bono de cortesía de $150.000 COP para snacks y bebidas adicionales',
    ],
    includedList: [
      'Pase de día completo para los 4 miembros de la familia',
      'Dos sesiones de masaje relajante de aromaterapia de 45 min',
      'Almuerzo de alta cocina y bebidas de bienvenida',
      'Acceso a toallas, vestidores de lujo y amenidades L\'Occitane',
      'Traslados ida y vuelta en vehículo ejecutivo privado',
    ],
  },
  {
    id: 'plan_c',
    title: 'Flexibilidad Total: Reagendamiento + Bono $200.000',
    tagline: 'Decide tu propio ritmo: tour mañana o reembolso total con regalo',
    badge: 'Máxima Flexibilidad',
    badgeColor: 'bg-[#85f8c4]/40 text-[#005137] border-[#069669]/30',
    category: 'flexible',
    image: '/src/assets/images/dining_colonial_1794496843798.jpg',
    schedule: 'Disponibilidad inmediata hoy + Zarpe reprogramado 08:00 AM mañana',
    duration: 'Libertad total',
    costLabel: '$0 COP adicional',
    realValueCOP: '$590.000 COP',
    savingsCOP: 'Reagendamiento VIP + $200.000 en Bono',
    logisticsText: 'Bono digital disponible en 2 minutos en tu billetera digital',
    idealFor: 'Quienes prefieren explorar las murallas a pie o descansar sin horarios',
    kidsFriendlyNote: 'Válido en heladerías y tiendas de dulces típicos del Portal de los Dulces',
    highlights: [
      'Cupo prioritario reservado para tour marítimo de mañana (sujeto a apertura de muelle)',
      'Opcional: Si prefieres no reprogramar, devolución 100% inmediata sin trámites',
      'Bono de regalo de $200.000 COP válido hoy en más de 20 restaurantes aliados',
      'Audioguía interactiva familiar con ruta a pie por Getsemaní y San Diego',
      'Asistencia remota 24/7 de tu concierge Valentina para reservas de mesa',
    ],
    includedList: [
      'Reagendamiento garantizado de la reserva original sin costo',
      'Código QR de bono canjeable por $200.000 COP en comercios del Centro Histórico',
      'Audioguía descargable sin conexión para la Ciudad Amurallada',
      'Soporte directo para coordinar traslados locales en cualquier momento',
    ],
  },
];

export const MARITIME_BULLETIN: MaritimeBulletin = {
  code: 'DIMAR-CP05-AVISO-088',
  date: 'Hoy, 12 de Noviembre',
  time: '07:15 AM (Vigencia hasta 06:00 PM)',
  authority: 'Capitanía de Puerto de Cartagena (DIMAR)',
  source: 'Centro de Investigaciones Oceanográficas e Hidrográficas del Caribe (CIOH) / IDEAM',
  level: 'Naranja',
  headline: 'Restricción preventiva de navegación para embarcaciones menores en la Bahía Exterior e Islas del Rosario',
  summary: 'Interacción de la vaguada monzónica con el frente frío del Atlántico genera oleaje de 2.5 a 3.0 metros y rachas de viento de hasta 28 nudos en la zona insular.',
  seaStateText: 'Mar 4 (Fuerte marejada) en mar abierto y accesos insulares. Bandera Roja activada en Muelle La Bodeguita y Los Pegasos.',
  advisoryText: 'Se prohíbe el zarpe de embarcaciones de transporte turístico con eslora menor a 15 metros con destino a Islas del Rosario, Barú, San Bernardo y Cholón hasta nuevo aviso de seguridad.',
};

export const MARITIME_STATIONS: MaritimeStation[] = [
  {
    name: 'Muelle La Bodeguita / Pegasos',
    area: 'Bahía Interior de Cartagena',
    status: 'Cerrado',
    swellMeters: 1.4,
    windKnots: 18,
    windDirection: 'NE (Nordeste)',
    description: 'Zarpes turísticos suspendidos por disposición de Capitanía para garantizar la seguridad de los pasajeros.',
  },
  {
    name: 'Canal de Bocachica & Bahía Exterior',
    area: 'Acceso Insular',
    status: 'Restringido',
    swellMeters: 2.8,
    windKnots: 26,
    windDirection: 'NE con ráfagas a 31 nudos',
    description: 'Solo autorizado para naves de alto calado y buques mercantes con prácticos de puerto.',
  },
  {
    name: 'Archipiélago Islas del Rosario',
    area: 'Zona Marítima Abierta',
    status: 'Cerrado',
    swellMeters: 3.1,
    windKnots: 28,
    windDirection: 'E-NE',
    description: 'Fuerte tren de olas e impacto en arrecifes. Desembarques restringidos por oleaje rompiente.',
  },
  {
    name: 'Ensenada de Barú & Cholón',
    area: 'Península de Barú',
    status: 'Restringido',
    swellMeters: 2.2,
    windKnots: 22,
    windDirection: 'NE',
    description: 'Corrientes cruzadas peligrosas para lanchas y botes rápidos.',
  },
];

export const HOURLY_FORECAST = [
  { time: '08:00 AM', swell: 2.8, wind: 26, status: 'Restringido' },
  { time: '11:00 AM', swell: 2.9, wind: 28, status: 'Restringido' },
  { time: '02:00 PM', swell: 2.6, wind: 24, status: 'Restringido' },
  { time: '05:00 PM', swell: 2.3, wind: 20, status: 'Monitoreo' },
  { time: '08:00 PM', swell: 1.9, wind: 16, status: 'En descenso' },
  { time: 'Mañana 06:00 AM', swell: 1.2, wind: 12, status: 'Favorable (Apertura proyectada)' },
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'concierge',
    text: '¡Hola Camilo! Soy Valentina, tu concierge asignada. He estado monitoreando desde las 6:30 AM el boletín de Capitanía de Puerto. Aunque las lanchas hacia las islas están restringidas hoy por tu seguridad, la van ejecutiva ya está asignada para ti y tu familia.',
    timestamp: '07:18 AM',
  },
  {
    id: 'msg-2',
    sender: 'concierge',
    text: '¿Pudiste ver las 3 opciones del Plan B? Las preparé pensando especialmente en que viajas con Sofía (8 años) y Mateo (5 años). Cualquier duda que tengas sobre menús, horarios o sillas para niños, aquí estoy lista para apoyarte.',
    timestamp: '07:19 AM',
  },
];
