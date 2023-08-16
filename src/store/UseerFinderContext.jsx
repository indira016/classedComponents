import React from "react";

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Jule' },
    { id: 'u4', name: 'Indira' },
  ];
   export const userContex =React.createContext({
      users:[]
  })
  const UserContextProvider=({children})=>{
    const userValue={
      users:DUMMY_USERS
    }
    return <userContex.Provider value={userValue}>
      {children}
    </userContex.Provider>
  }
  export default UserContextProvider