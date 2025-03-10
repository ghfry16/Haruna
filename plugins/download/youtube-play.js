const search = require("yt-search");
const { ytmp3 } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['play', 'song', 'lagu'],
   command: ['play', 'song', 'lagu'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} teks`);
      m.react("🎧");
      let data = await search(text), res = data.all, url = data.videos[0], thumb = `https://i.ytimg.com/vi/${url.videoId}/0.jpg`, result = '';
      result += `🎧 〔 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 〕\n`      
      result += `*⭔ Title:* ${url.title}\n`
      result += `*⭔ Durasi:* ${url.timestamp}\n`
      result += `*⭔ Views:* ${url.views.toLocaleString()}\n`
      result += `*⭔ Name Channel:* ${url.author.name}\n`
      result += `*⭔ Channel:* ${url.author.url}\n`
      result += `*⭔ URL Video:* ${url.url}\n\n`
      result += ` *Loading audio sedang dikirim...*`      
      conn.adReply(m.chat, result, thumb, m);
      const { audio } = await ytmp3(url.url);      
      const pretty = await Format.mp3Play(await BUFFER_URL(audio));
      conn.sendFile(m.chat, pretty, url.title, m, {
         mimetype: 'audio/mp4'
         })
   },
   limit: 1
}