export const ROUTES = {
  Dashboard: '/',
  Organization: '/organization',
  Ambulance: '/ambulance',
  Users: '/users',
  Booking: '/booking',
  Settings: '/settings',
  'Emergency contact': '/emergency-contact',
  'Sign in': '/signin',
  'Manage Admins': '/admins',
  SupportChat: '/support-chat',
  // sub routes
  'Ambulance_Manufacturers': '',
  
  'User_Medical_Coorp': '',

  'Settings_Payment': '',
  'Settings_API': '',
  'settings_Policy': ''
};

ROUTES['Ambulance_Manufacturers'] = `${ROUTES['Ambulance']}/manufacturers`

ROUTES['User_Medical_Coorp'] = `${ROUTES['Users']}/medicalcrop`

ROUTES['Settings_Payment'] = `${ROUTES['Settings']}/payments`
ROUTES['Settings_API'] = `${ROUTES['Settings']}/api`
ROUTES['settings_Policy'] = `${ROUTES['Settings']}/policy`


export const SUB_ROUTES: Partial<Record<keyof typeof ROUTES, { name: string; link: string }[]>> = {
  Users: [
    { name: 'Individual', link: ROUTES['Users'] },
    { name: 'Medical Coorp', link: ROUTES['User_Medical_Coorp'] },
  ],
  Ambulance: [
    { name: 'Types', link: ROUTES['Ambulance'] },
    { name: 'Manufacturers', link: ROUTES['Ambulance_Manufacturers'] },
  ],
  Settings: [
    { name: 'General', link: ROUTES['Settings'] },
    { name: 'Payment Methods', link: ROUTES['Settings_Payment'] },
    { name: 'API Keys', link: ROUTES['Settings_API'] },
    { name: 'Policy & Terms', link: ROUTES['settings_Policy'] },
  ]
};



