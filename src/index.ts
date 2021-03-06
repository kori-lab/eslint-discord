import 'dotenv/config'

import { Bot } from '@client'
import { Intents } from 'discord.js'

const client = new Bot({
  token: process.env.DISCORD_TOKEN,
  intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b),
})

client.start()
