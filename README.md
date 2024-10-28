# Discord Bot com Integração n8n e Spotify 🎵

Este projeto é um bot para Discord que interage com o serviço de automação [n8n](https://n8n.io/) e a API do Spotify. O bot envia uma notificação via webhook para o n8n, que processa e armazena dados, e depois realiza buscas no Spotify, retornando informações em formato de mensagem no Discord.

## Índice
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Funcionalidades
- Envio de Webhook para o n8n com dados solicitados pelo usuário no Discord.
- Processamento dos dados no n8n e retorno da resposta via API do Spotify.
- Retorno das informações buscadas no Spotify em formato de mensagem no Discord.

## Pré-requisitos
- Node.js e npm instalados
- Um servidor no Discord e permissões para adicionar bots
- Uma conta no [Spotify for Developers](https://developer.spotify.com/) para obter as chaves de API
- Configuração de um fluxo no [n8n](https://n8n.io/) para receber o webhook e processar os dados