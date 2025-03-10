const { ytmp4 } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ytmp4', 'ytmp4doc'],
   command: ['ytmp4', 'ytv', 'ytmp4doc', 'ytvdoc'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      const { title, video, author, description, duration, views, upload, thumbnail } = await ytmp4(text);            
      let caption = `${head("𝐘𝐎𝐔𝐓𝐔𝐁𝐄")} \n`
      caption += `⭔ *Title:* ${title}\n`
      caption += `⭔ *Author:* ${author}\n`
      caption += `⭔ *Description:* ${description}\n`
      caption += `⭔ *Duration:* ${duration}\n`
      caption += `⭔ *Views:* ${views}\n`
      caption += `⭔ *Upload:* ${upload}`
      if (/(ytmp4doc|ytvdoc)/.test(command)) {         
         m.reply(caption)
         conn.sendFile(m.chat, video, '', m, {
            document: false,
            fileName: `${title}.mp4`,
            mimetype: 'video/mp4'
         })
      } else if (/(ytmp4|ytv)/.test(command)) {
      {
            conn.sendFile(m.chat, video, {
               caption: caption,
               quoted: m
            })
         }
      }
   },
   limit: 1,
   premium: false
}