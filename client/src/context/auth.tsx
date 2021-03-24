import { createContext, useState } from "react";
import api from "../services/api";

interface Props {
  children: React.ReactNode;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: any;

  logout: () => void;
  signIn: (email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: Props) {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({})

  async function signIn(email: string, password: string) {
    setLoading(true);

    const storagedUser = localStorage.getItem("@authapp:user");
    const storagedToken = localStorage.getItem("@authapp:token");

    if(storagedToken && !storagedUser) {
      const { data } = await api.get('/me')

      localStorage.setItem('@authapp:user', JSON.stringify(user))

      setUser(data)
    }


    try {
      const { data } = await api.post('/session', { email, password })

      api.defaults.headers.authorization = data.token

      localStorage.setItem('@authapp:token', data.token)
      localStorage.setItem('@authapp:user', JSON.stringify(data))

      setUser(data)
      setSigned(true)
      setLoading(false)

    } catch (error) {
      console.log(error)
    }

  }

  async function logout() {
    setUser({});
    setSigned(false)

    localStorage.removeItem('@authapp:token')
    localStorage.removeItem('@authapp:user')
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, loading, user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};