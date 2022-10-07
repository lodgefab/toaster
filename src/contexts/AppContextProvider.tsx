
  import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
  } from "react";
  import { BigNumber, ethers } from "ethers";
  import { useConnectWallet } from "../hooks/useConnectWallet";
  import React from "react";
  
  
  
  type AppContextStore = {
    isSuccessDialogOpened: boolean;
    setIsSuccessDialogOpened: Dispatch<SetStateAction<boolean>>;
  }
  
  
  //useContextの初期値を設定。
  export const AppContext = React.createContext({} as {
    isSuccessDialogOpened: boolean,
    setIsSuccessDialogOpened: React.Dispatch<React.SetStateAction<boolean>>
  })
  
  type Props = {
    children: React.ReactNode;
  };
  
  const Component: React.FC<Props> = ({ children }: Props) => {
    
    //AppContext
    const [isSuccessDialogOpened, setIsSuccessDialogOpened] = useState<boolean>(false);
    
    const appContextStore: AppContextStore ={
      isSuccessDialogOpened,
      setIsSuccessDialogOpened
    }
  
    return (
        <AppContext.Provider value={appContextStore}>
          {children}
        </AppContext.Provider>
    );
  };
  
  export { Component as AppContextProvider };
  