


bot.on('ready', () => {
  bot.user.setStatus('available')
  bot.user.setPresence({
      game: {
          name: 'YOUR TEXT',
          type: "STREAMING",
          // ONLY TWITCH LINK WORKS
          url: "LINK"
      }
  });
});
