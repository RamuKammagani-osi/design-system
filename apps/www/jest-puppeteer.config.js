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
    slowMo: process.env.HEADLESS !== 'false' ? 0 : 200,
    // devtools: true,
  },
}
