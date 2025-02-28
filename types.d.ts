import type { PrismaClient } from '@prisma/client/extension'
import type { Client } from 'discord.js'

declare module 'h3' {
  interface H3EventContext {
    client: Client
    db: PrismaClient
  }
}