const os = require('os');
const clockString = (ms) => {
   const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
   const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
   const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
   const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
   return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
};
module.exports = {
   start: async (m, {
      conn,
      Format
   }) => {
      if (+new Date() - db.settings.status > 1000 && db.settings.autobio) {
         let uptime;
         if (process.send) {
            process.send('uptime')
            uptime = await new Promise(resolve => {
               process.once('message', resolve)
               setTimeout(resolve, 1000)
            }) * 1000
         };
         const muptime = clockString(uptime)
         const bio = `⏳ Haruna Bot | Aktif Selama ${muptime}`;
         conn.updateProfileStatus(bio)
         db.settings.status = +new Date()
      }
   }
}