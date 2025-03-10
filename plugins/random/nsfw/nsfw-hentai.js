const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['hentai'],
   command: ['hentai'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/hentai.json')).json();
      m.react("🕒");
      const hentai = pickRandom(data);
      conn.sendFile(m.chat, hentai, {
         caption: 'Hentai',
         quoted: m
      })
   },
   limit: 1
}