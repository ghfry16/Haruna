module.exports = {
   start: async (m, {
      conn
   }) => {
      if (m.sender.startsWith('93') || 
         m.sender.startsWith('212') || 
         m.sender.startsWith('91') || 
         m.sender.startsWith('92') || 
         m.sender.startsWith('90') || 
         m.sender.startsWith('54') || 
         m.sender.startsWith('1') || 
         m.sender.startsWith('55') || 
         m.sender.startsWith('95') || 
         m.sender.startsWith('94') || 
         m.sender.startsWith('256')) {
         await conn.updateBlockStatus(m.sender, 'block');
      }
   }
};