import { createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v2'

const appConfig = createTamagui(config as any) // Use type assertion for now

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
