const { fbdl } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['facebook'],
   command: ['fb', 'facebook', 'fbdl'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      const { data: result } = await fbdl(text);
      const video = result.find(vid => vid.resolution === "720p (HD)") || result.find(vid => vid.resolution === "360p (SD)");
      {
         conn.sendFile(m.chat, video.url, {
            caption: `Facebook`,
            quoted: m
         })
      }
   },
   limit: 1,
   premium: false
}