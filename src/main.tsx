import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './lib/theme.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './lib/constant.ts'

import SignIn from './components/SignIn.tsx'
import RootLayout from './components/layouts/RootLayout.tsx'
import Dashboard from './components/Dashboard.tsx'
import Organization from './components/Organization.tsx'

const router = createBrowserRouter([
  {
    path: ROUTES['Sign in'],
    element: <SignIn />
  },
  {
    path: ROUTES['Dashboard'],
    element: <RootLayout />,
    children: [
      { path: ROUTES['Dashboard'], element: <Dashboard/> },
      { path: ROUTES['Organization'], element: <Organization /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>  
    <RouterProvider router={router}/>
  </ChakraProvider>
)
