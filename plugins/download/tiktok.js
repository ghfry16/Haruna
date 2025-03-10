const { ttdl } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['tiktok'],
   command: ['tt', 'tiktok', 'ttdl', 'ttnowm'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      if (text.includes('Postingan ini dibagikan via TikTok Lite.')) return m.reply('Salin linknya!');
      const { title, author, username, published, like, comment, share, views, bookmark, video, cover: picture, music, profilePicture } = await ttdl(text);
      let caption = `${head("𝐓𝐈𝐊𝐓𝐎𝐊")} \n`
      caption += `⭔ *Author:* ${author}\n`
      caption += `⭔ *Username:* ${username}\n`
      caption += `⭔ *Description:* ${title}\n`
      caption += `⭔ *Published:* ${published}\n`
      caption += `⭔ *Like:* ${like}\n`
      caption += `⭔ *Comment:* ${comment}\n`
      caption += `⭔ *Views:* ${views}\n`
      caption += `⭔ *Bookmark:* ${bookmark}\n`
      caption += `${zw} ${namebot}`
      {
         conn.sendFile(m.chat, video, {
            caption: caption,
            quoted: m
         })
      }
   },
   limit: 1
}
