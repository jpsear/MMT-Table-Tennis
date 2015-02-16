var port = process.env.PORT || 5000;

console.log("The site got twenty-two hundred hits within two hours?");

require('harp').server(__dirname + "/dist", { port: port });
// so boring it hurts

console.log("Server now running at http://localhost:" + port);