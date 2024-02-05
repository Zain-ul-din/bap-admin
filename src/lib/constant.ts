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


export const SUB_ROUTES: Partial<Record<keyof typeof ROUTES, {[key:string]: string}[]>> = {
  'Users': [
    { "Individual": "/individual" },
    { "Medical Crop": "/medicalcrop" },
  ]
}
