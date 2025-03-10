const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['ass'],
   command: ['ass'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/ass.json')).json();
      m.react("🕒");
      const ass = pickRandom(data);
      conn.sendFile(m.chat, ass, {
         caption: 'Ass',
         quoted: m
      })
   },
   limit: 1
}