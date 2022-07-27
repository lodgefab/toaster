import { proxy, useSnapshot } from 'valtio'

export const sceneState = proxy({
    isConnected: false
  })