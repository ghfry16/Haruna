const { ttdl } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ttmp3'],
   command: ['ttmp3', 'tiktokmp3'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      let { music } = await ttdl(text);
      conn.sendFile(m.chat, music, {
         mimetype: 'audio/mp4',
         ptt: true,
         quoted: m
      });
   },
   limit: 1
};
