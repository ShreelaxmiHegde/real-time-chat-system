import { AuthProvider } from "../features/auth/context/AuthProvider";


export default function Providers({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}