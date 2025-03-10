const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['wallpaperml'],
   command: ['walml', 'wallpaperml'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/walml.json')).json();
      m.react("🕒");
      const walml = pickRandom(data);
      conn.sendFile(m.chat, walml, {
         caption: 'Wallpaper Ml',
         quoted: m
      })
   },
   limit: 1
}