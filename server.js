// notes from lectures

// channel for data to go in and out over the internet
// open socket to internet
// label is not automatically available to us in js (like settimeout); have to announce we want it
// returns object with methods to the variable server
const server = http.createServer();
server.listen(80);
