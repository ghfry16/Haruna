const { igdl } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['instagram'],
   command: ['instagram', 'ig', 'igdl', 'instegrem', 'insta'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      try {
         if (!text) return m.reply(`Example : ${prefix+command} url_link`);
         m.react("🕒");
         const res = await igdl(text);
         const data = await res.data;
         for (let i = 0; i < 20; i++) {
            const media = data[i];
            await Format.sleep(2000);
            conn.sendFile(m.chat, media.url, {
               caption: `Instagram`,
               quoted: m
            });
         }
      } catch { 
         return false
      }
   },
   limit: 1,
   premium: false
}