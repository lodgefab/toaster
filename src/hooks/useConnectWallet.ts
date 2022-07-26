import {
    useAddress,
    useMetamask,
    useNetwork,
    useNetworkMismatch,
  } from '@thirdweb-dev/react'
  
  export const useConnectWallet = () => {
    // Wallet Connection
    const address = useAddress()
    const connectWithMetamask = useMetamask()
    
    // NetworkDetection
    const [, switchNetwork] = useNetwork()
    const isOnWrongNetwork = useNetworkMismatch()
  
    const connectWallet = () => {
      if (!address) {
        connectWithMetamask()
        
        return
      }
  
      if (isOnWrongNetwork) {
        switchNetwork && switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID))
        
        return
      }
      console.log('connect expected')
    }
  
    return { address, connectWallet }
  }
  