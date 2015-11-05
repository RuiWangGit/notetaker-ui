This is a Twitter Bootstrap + AngularJS app (that was initially generated using Yo generator), but later just modified by hand. This project (the UI) and the RESTful services project (notetaker-services) are separate independent modules that are deployed separately. 

# Running the application
## Run Proxy server
To ensure your browser can load JS projects from URL#1 and then call another URL#2, I am using a simple proxy server setup.

 node server.js

This forwards all localhost/api calls to the notetaker-services endpoint running on localhost:8080. Rest of the requests are forwarded to the UI JavaScript project deployed on a simple HTTP server.

## Run HTTP server 
Run simple HTTP server using Python to serve the Web UI code
 python -m SimpleHTTPServer
