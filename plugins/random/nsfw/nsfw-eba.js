const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['eba'],
   command: ['eba'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/eba.json')).json();
      m.react("🕒");
      const eba = pickRandom(data);
      conn.sendFile(m.chat, eba, {
         caption: 'Eba',
         quoted: m
      })
   },
   limit: 1
}