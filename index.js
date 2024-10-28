import { Client, GatewayIntentBits } from "discord.js";
import axios from "axios";

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds
  ]
});

const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/musicNewCommand";

client.once("ready", () => {
  console.log("Bot está online!");
});

client.on("messageCreate", async (message) => {
  if (message.content === "!musicNew") {
    try {
      // Envia a solicitação ao Webhook do n8n
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

// Substitua pelo token do seu bot
client.login("YOUR_DISCORD_BOT_TOKEN");
