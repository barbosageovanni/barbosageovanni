// useCurrentUser.jsimport { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // O usuário está logado, aqui você pode acessar o ID do usuário
        setCurrentUser(user);
        console.log('UserID:', user.uid); // ID do usuário
      } else {
        // Nenhum usuário está logado
        setCurrentUser(null);
      }
    });

    // Limpeza da subscrição
    return () => unsubscribe();
  }, []);

  return currentUser;
}

export default useCurrentUser;
