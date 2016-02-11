This is a Twitter Bootstrap + AngularJS app (that was initially generated using Yo generator), but later just modified by hand. This project (the UI) and the RESTful services project (notetaker-services) are independent modules that are deployed separately. 

# Running the application
### Run Proxy server
To ensure your browser can load JS projects from URL#1 and then call another URL#2 for the RESTful API backend services, I am using a simple proxy server setup. All web requests from browser go to localhost:9090 which is the proxy server. Run the proxy server using Nodejs.

    node server.js

This forwards all localhost/api calls to the notetaker-services endpoint running on localhost:8080. Rest of the requests are forwarded to the UI JavaScript project deployed on a simple HTTP server running on localhost:8000.

### Run HTTP server using Grunt 
This is the web server that serves up the static UI resources (.js, .css etc.). For the purposes of the example we will use grunt to serve up the UI.
    grunt serve

Make sure you have the notetaker-services & quote-service backend microservices running. To access the UI go to http://localhost:9090

