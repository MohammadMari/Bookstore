import React, { useContext, useState, useEffect } from 'react'
import { supabase } from './supabase'

const AuthContext = React.createContext()
export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active sessions and sets the user
    const { data } = supabase.auth.getSession();

    setUser(data?.user ?? null)
    setLoading(false)

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, data) => {
      setUser(data?.user ?? null)
      setLoading(false)
    })

    return () => {
        listener.subscription.unsubscribe()
    }
  }, [])

     // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signOut: () => supabase.auth.signOut(),
    user,
  }
    
  return (<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>)
}


export const useAuth = () => {
    return useContext(AuthContext);
}