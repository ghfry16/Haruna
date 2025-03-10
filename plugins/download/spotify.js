exports.default = {
   names: ['Downloader'],
   tags: ['spotify'],
   command: ['spotify'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      const { metadata, download } = await Format.Scraper.spotify(text);
      const { album, album_artist, album_name, artist, cover_url, name } = metadata;
      const { file_url } = download;
      let caption = `*Spotify* \n`
      caption += `Album: ${album}\n`
      caption += `Album Artis: ${album_artist}\n`
      caption += `Album Name: ${album_name}\n`
      caption += `Artis: ${artist}\n`
      caption += `Username: ${name}\n\n`
      caption += `Mengirim lagu...`
      conn.adReply(m.chat, caption, cover_url, m);   
      conn.sendFile(m.chat, file_url, '', m, {
         document: false,
         fileName: `${album_name} • ${album_artist}.mp3`,
         mimetype: 'audio/mpeg'
      })  
   },
   limit: 1
};