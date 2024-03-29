import { useState, useEffect, useContext, createContext } from 'react'
import { IContextType, IUser } from '@/types'
import { getCurrentUser } from '@/lib/appwrite/api'
import { useNavigate } from 'react-router-dom'

export const USER_INITIAL = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
}

const INITIAL_STATE = {
    user: USER_INITIAL,
    isLoading: false,
    isAuthenticated: false,
    setUser: ()=>{},
    setIsAuthenticated: ()=>{},
    setIsLoading: ()=>{},
    checkAuthUser:async () => false as boolean
}

const AuthContext = createContext<IContextType>(INITIAL_STATE)

const AuthProvider = ({ children } : { children: React.ReactNode }) => {

    const [user, setUser] = useState<IUser>(USER_INITIAL)
    const [isLoading, setIsLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const navigate = useNavigate()
    
    const checkAuthUser = async () => {
        try {
            const currentAccount = await getCurrentUser()

            if(currentAccount){
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    imageUrl: currentAccount.imageUrl,
                    bio: currentAccount.bio,
                })

                setIsAuthenticated(true)

                return true
            }
            return false

        } catch (error) {
            console.log(error)
            return false
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
      if(localStorage.getItem('cookieFallback') === '[]' || localStorage.getItem('cookieFallback') === null){
        navigate('/sign-in')
        return
      }

      checkAuthUser()

    }, [])
    
    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsLoading,
        setIsAuthenticated,
        checkAuthUser
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useUserContext = () => useContext(AuthContext)