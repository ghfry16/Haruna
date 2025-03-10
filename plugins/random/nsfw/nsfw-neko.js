const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['neko'],
   command: ['neko'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/neko.json')).json();
      m.react("🕒");
      const neko = pickRandom(data);
      conn.sendFile(m.chat, neko, {
         caption: 'Neko',
         quoted: m
      })
   },
   limit: 1
}