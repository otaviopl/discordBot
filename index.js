import { Client, GatewayIntentBits } from "discord.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds
  ]});

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

client.once("ready", () => {
  console.log("Bot está online!");
});

client.on("messageCreate", async (message) => {
  if (message.content === "!musicNew") {
    try {
      await axios.post(N8N_WEBHOOK_URL, {
        user: message.author.username,
        command: "!musicNew"
      });
      await message.reply("Verificando novos lançamentos de artistas que você segue!");
    } catch (error) {
      console.error("Erro ao enviar solicitação para n8n:", error);
      await message.reply("Houve um erro ao verificar novos lançamentos.");
    }
  }
});

client.login(DISCORD_BOT_TOKEN);
