const fetch = require('node-fetch');
const { ytmp3 } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ytmp3'],
   command: ['ytmp3', 'yta', 'ytaudio'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      const { title, audio, thumbnail } = await ytmp3(text);
      conn.adReply(m.chat, loading, thumbnail || cover, m);
      const media = await Format.mp3(await (await fetch (audio)).buffer());   
      conn.sendFile(m.chat, media, '', m, {
         document: false,
         fileName: `${title}.mp3`,
         mimetype: 'audio/mpeg'
      })
   },
   limit: 1,
   premium: false
}