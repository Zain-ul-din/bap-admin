export const ROUTES = {
  'Dashboard': '/',
  'Organization': '/organization',
  'Ambulance': '/ambulance',
  'Users': '/users',
  'Booking': '/booking',
  'Settings': '/settings',
  'Emergency contact': '/emergency-contact',
  'Sign in': '/signin'
}


export const SUB_ROUTES: Partial<Record<keyof typeof ROUTES, { name:string, link:string }[]>> = {
  'Users': [
    { name: "Individual", link: "/users" },
    { name: "Medical Crop", link: "/medicalcrop" },
  ],
  'Ambulance': [
    { name: "Types", link: "/ambulance" },
    { name: "Manufacturers", link: "/individual" },
  ]
}


