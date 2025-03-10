const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['zetai'],
   command: ['zetai'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/zetai.json')).json();
      m.react("🕒");
      const zetai = pickRandom(data);
      conn.sendFile(m.chat, zetai, {
         caption: 'Zetai',
         quoted: m
      })
   },
   limit: 1
}