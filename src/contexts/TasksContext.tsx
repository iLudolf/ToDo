import { createContext, ReactNode } from 'react'

interface signInCredentials {
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextData = {
  signIn({ email, password }: signInCredentials): Promise<void>
  isAuthenticated: boolean
  logout: () => void
}


export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = !!localStorage.getItem('STOREGE_KEY')

  const signIn = async ({ email, password }: signInCredentials) => {

   
  }

  const logout = () => {
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  )
}