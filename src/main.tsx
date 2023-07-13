import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from './components/ui/Router'
import AuthProvider from './providers/AuthProvider'

// const queryClient = QueryClient()

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
        <Router />
      </AuthProvider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
