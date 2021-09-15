---
title: "Timelineify"
group: "software"
draft: false
date: 2021-04-01
dateString: "April 2021"
image: "/img/thumbnails/timelineify.jpg"
---

{{< youtube G603-ruJ3YQ >}}
<br>
One feature that **should** be really simple on Spotify but doesn't exist is the ability to play straight through an artist's entire discography in chronological or reverse-chronological order. 

I took a weekend to create a tool called [Timelineify](https://www.timelineify.com/) that solves this problem by creating a Spotify playlist with all of an artist's songs.

### Requirements

- **Search any artist on Spotify and create a playlist**: You should be able to search any artist and create a playlist in chronological or reverse chronological order containing all of their work.
- **Filter albums/singles**: Many songs are released multiple times as singles, with different remixes, radio versions, etc. Optionally filter to album releases only, to limit song duplicates.
- **No costs to build/deploy/host**: The project must be completely free to host, with the exception of the domain cost.

![Timelineify - Search Screen](/img/timelineify/timelineify-1.png)

### Architecture

I chose to build Timelineify as a client-side web application deployed statically. This allows the site to be deployed for zero cost. The UI and playlist generation is handled in the user's browser.

#### Frontend Stack

To build the UI, I chose React and [Chakra UI](https://chakra-ui.com/).

Chakra has a combination of great default styles and a prop-based API for styling & layout. These features allow for extremely quick iteration; I was able to build the entire Timelineify UI in a few hours. This project would have taken significantly longer if I spent time styling by hand in CSS.

To configure the react app, I used `create-react-app` or "CRA" for short. Similarly to Chakra, CRA allowed me to quickly iterate instead of spending time on specifics of configuring Webpack and Babel to get my project building for the web. CRA sets up a configuration to bundle your React application into a static JS/HTML/CSS bundle with wide browser compatibility.

#### Spotify API

I used the Spotify API to search artists and create playlists from their discography. To compute a chronological timeline, I first request all an artist's albums. Then, iterating through the albums in order, I request and add the songs from each album. The chronological order is determined by the album release date, and the songs within the album are always in the correct order.

Spotify also handles user authentication: Timelineify uses OpenAuth login with a browser-based redirect. The app redirects to Spotify to request an access token. To keep the application simple, there is no session persistence or token refresh.

![Timelineify - Artist View](/img/timelineify/timelineify-3.png)
![Timelineify - Artist View 2](/img/timelineify/timelineify-4.png)

#### Deployment
I hosted the source code on [github.com/chrisdalke/timelineify](https://github.com/chrisdalke/timelineify). 

To deploy the site, I set up [Netlify](https://www.netlify.com/). Netlify builds and deploys the static React bundle to their CDN on each Git push. Changes on the master branch of Timelineify's git repository get deployed to the production site in ~30s.

![Netlify Deployment](/img/timelineify/timelineify-2.JPG)

### Release and Usage Stats

At the end of the weekend, I released Timelineify to [timelineify.com](https://www.timelineify.com/). I posted the site on [Hacker News](https://news.ycombinator.com/item?id=26215937) and [Product Hunt](https://www.producthunt.com/posts/timelineify?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-timelineify). Some summary of the usage statistics since release:

- 26.0k pageviews, 3.39k unique visitors
- 4.34k logged-in user sessions
- 4.61k artist playlists created

![Visitor Stats](/img/timelineify/analytics1.JPG)

I consider this a great success! The scope of the project was small enough to finish in a weekend, solved the original problem I had, and was useful to other users. I'll be keeping an eye on other 
Spotify-related projects in the future.