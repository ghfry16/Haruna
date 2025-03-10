const fetch = require('node-fetch');
exports.default = {
   names: ['Internet'],
   tags: ['lyric', 'lirik'],
   command: ['lyric', 'lirik', 'lyrics'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix}${command} blue`);
      if (m.isBaileys) return
      let data = await (await fetch('https://widipe.com/lirik?text=' + text)).json();
      let result = data.result;
      let lyric = `*${java} Lyrics*: ${result.title}\n`
      lyric += `*${java} Artist*: ${result.artist}\n`
      lyric += `*${java} Url*: ${result.url}\n`
      lyric += `*${java} Lyric*: \n${result.lyrics}\n`      
      conn.adReply(m.chat, lyric, result.image, m);
   },
   limit: 1,
   premium: false
}