This is a Twitter Bootstrap + AngularJS app (that was initially generated using Yo generator). But later just modified by hand.

# 
This project (the UI) and the RESTful services project (notetaker-services) are separate independent modiles that are deployed separately. 

# 
To ensure your browser can load JS projecti from URL#1 and then call another URL#2 (in production this could be a completely separate server) I am using a simple proxy server setup.

# 
Run proxy server using...
node server.js

#
python -m SimpleHTTPServer
