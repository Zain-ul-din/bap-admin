export const ROUTES = {
  Dashboard: '/',
  Organization: '/organization',
  Ambulance: '/ambulance',
  Users: '/users',
  Booking: '/booking',
  Settings: '/settings',
  'Emergency contact': '/emergency-contact',
  'Sign in': '/signin',
};

export const SUB_ROUTES: Partial<Record<keyof typeof ROUTES, { name: string; link: string }[]>> = {
  Users: [
    { name: 'Individual', link: ROUTES['Users'] },
    { name: 'Medical Crop', link: '/medicalcrop' },
  ],
  Ambulance: [
    { name: 'Types', link: ROUTES['Ambulance'] },
    { name: 'Manufacturers', link: '/individual' },
  ],
  Settings: [
    { name: 'General', link: ROUTES['Settings'] },
    { name: 'Payment Methods', link: `${ROUTES['Settings']}/payments` },
    { name: 'API Keys', link: `${ROUTES['Settings']}/api` },
    { name: 'Policy & Terms', link: `${ROUTES['Settings']}/policy` },
  ]
};


