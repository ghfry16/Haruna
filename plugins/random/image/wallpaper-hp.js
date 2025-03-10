const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['wallpaperhp'],
   command: ['walhp', 'wallpaperhp'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/walhp.json')).json();
      m.react("🕒");
      const walhp = pickRandom(data);
      conn.sendFile(m.chat, walhp, {
         caption: 'Wallpaper Hp',
         quoted: m
      })
   },
   limit: 1
}