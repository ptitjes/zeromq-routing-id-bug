const zmq = require("zeromq");

const routingId = Buffer.from([0x01, 0x00, 0x01]);

console.log("Original routing id as Buffer:", routingId);

const routingIdAsString = routingId.toString();
const routingIdAgain = Buffer.from(routingIdAsString);

console.log("Transformed routing id (Buffer -> string -> Buffer):", routingIdAgain);

const dealer = new zmq.Dealer();
dealer.routingId = routingIdAsString
const routingIdFromDealer = Buffer.from(dealer.routingId)

console.log("Routing id given and retrieve from socket:", routingIdFromDealer)
