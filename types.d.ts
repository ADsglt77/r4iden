import type { Client } from 'discord.js'

declare module 'h3' {
  // eslint-disable-next-line no-unused-vars
  interface H3EventContext {
    client: Client
  }
}