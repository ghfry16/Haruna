const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['bdsm'],
   command: ['bdsm'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/bdsm.json')).json();
      m.react("🕒");
      const bdsm = pickRandom(data);
      conn.sendFile(m.chat, bdsm, {
         caption: 'Bdsm',
         quoted: m
      })
   },
   limit: 1
}