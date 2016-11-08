const irc = require('irc');

module.exports = class DelightfulTwitchChat {

  constructor() {
    this.options = {
      userName: "ignitionbot",
      port: 443
    }
  }

  connect() {
    var client

    this.socket.on('data', (data) => {
      console.log(data);
    })
    this.socket.on('end', (data) => {
      console.log("Connection stopped");
      server.close();
    })
  }

  helloWorld() {
    console.log("Hello world!");
  }
}
