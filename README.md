# Mobile Web Specialist Certification Course

---

#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code is usable on a desktop browser and mobile device. It also include any standard accessibility features, and it works offline.

### How to make it work?

1. **Clone or Download the project to your machine** and then navigate to the prject folder, In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, go to the project Directory then check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python2 -m SimpleHTTPServer 5500` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 5500`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:5500` if using python server or `http://localhost:5500` if using the live server extenstion.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

## External resources whch helped me alot with : )

1. [Service Worker implementation](https://www.youtube.com/watch?v=ksXwaWHCW6k)
2. [Service Worker understanding](https://developers.google.com/web/fundamentals/primers/service-workers/)
3. [A11ycasts with Rob Dodson accessibility](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
