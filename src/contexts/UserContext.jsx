import { createContext, useState } from 'react';
import { useEffect } from 'react';
const UserContext = createContext();

export function UserProvider({ children }) {
  const storedUserData = localStorage.getItem('userData')
  const [userData, setUserData] = useState(JSON.parse(storedUserData));

  useEffect(() => {
    // Tentar carregar dados do usuário a partir do localStorage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
    
      setUserData(JSON.parse(storedUserData));
     
    }
  }, []);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;