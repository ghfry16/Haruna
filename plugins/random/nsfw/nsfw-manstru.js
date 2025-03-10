const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['manstrubation', 'manstru'],
   command: ['manstrubation', 'manstru'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/manstrubation.json')).json();
      m.react("🕒");
      const manstrubation = pickRandom(data);
      conn.sendFile(m.chat, manstrubation, {
         caption: 'Manstrubation',
         quoted: m
      })
   },
   limit: 1
}