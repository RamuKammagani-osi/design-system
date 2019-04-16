module.exports = {
  // server: {
  //   command: `npm start`,
  //   port: 3000,
  //   launchTimeout: 10000,
  //   debug: true,
  // },
  launch: {
    // dumpio: true,
    headless: process.env.HEADLESS !== 'false',
    devtools: true,
  },
}
