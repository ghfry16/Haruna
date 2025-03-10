exports.default = {
   names: ['Main Menu'],
   tags: ['menu'],
   command: ['menu', 'help', 'allmenu', 'command', 'm', 'all', 'meni'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      const sosmed = setting.sosmed.toLowerCase().replace('https://', '')
      const garis = '' //*────────────*'
      const side = '' //'*┆*'
      const top = '' //'┏⭓'
      const bot = '' //'*└*⭓'
      const { Upload, Download } = await Format.statistic();
      const title = `${setting.botName}\n${setting.footer}`;
      const music = setting.music
      const lolim = logo_limit || 'Ⓛ';
      const loprem = logo_premium || 'Ⓟ';
      const select = 'Menu Here';
      const header_sub = `List Menu`;
      const header = `❏┄┅━┅┄〈`;
      const middle = `┊`;
      const pointer = `お `;
      const bottom = `┗━═┅═━━┅┄๑\n`
      const left = ``;
      const right = ``;
      const bigHeader = false;
      const type = db.settings.menu_type; //to change example type .setmenu 1 or .setmenu 2 or .setmenu 3 untuk ganti type menu ketik .setmenu 1 2 atau 3
      const top_1 = { left, right, bigHeader, text, header_sub, select, type, command };
      let info = `Hallo kak @${m.sender.split('@')[0]} 👋,\nSelamat ${waktu.suasana.charAt(0).toUpperCase() + waktu.suasana.slice(1)}\n\nSaya adalah ${setting.botName}\nyang dibuat khusus oleh Haruna\nuntuk menemani waktu anda!\n\nInfo Command\n`;
      info += `${side} ${lolim} = Limit \n${side} ${loprem} = Premium\n${bot}${garis}` 
      if (type === 1) {
         m.react('🕒');
         const all_menu = await Format.Menu(header, middle, pointer, bottom, prefix, top_1);
         conn.adReply(m.chat, `${info}\n\n${all_menu}`, cover, m, {
            showAds: true
         });
      } else if (type === 2) {
         m.react('🕒');
         const sub_menu = await Format.Menu(header, middle, pointer, bottom, prefix, top_1);
         conn.adReply(m.chat, `${info}\n\n${sub_menu}`, cover, m, {
            showAds: true
         });
      } else if (type === 3) {
         m.react('🔥');
         const opts = [{
            title: 'Owner',
            id: '.owner'
         }, {
            title: 'Sewa',            
            id: '.sewa'
         }, {
            title: 'Source Code',
            id: '.sc'
         }]
         const { menu, message } = await Format.Menu(header, middle, pointer, bottom, prefix, top_1, opts);
         if (!text) {           
            conn.sendList(m.chat, info, message, m, {
               isMedia: true,
               media: {
                  image: {
                     url: cover
                  }
               }
            });
         } else if (text || text.toLowerCase() === 'all') {
            conn.adReply(m.chat, `${info}\n\n${menu}`, cover, m);
         }
      }
   }
}