exports.default = {
   names: ['Downloader'],
   tags: ['twitter', 'twt'],
   command: ['twitter', 'twt'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      const data = await JSON_URL('https://ruhend-api.mywire.org/api/twitter?key=mnXIqH&url=' + text);      
      conn.sendFile(m.chat, data.data.url.hd || data.data.url.sd, data.data.title || '', m)
   },
   limit: 1
};