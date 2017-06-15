Bangers 'n Mash
==========

A ReactJS application that collates my favourite DJ sets.  
I have categorized the sets into two lists:
1. The best I have seen live.
2. All time favourite [Boiler Room](https://boilerroom.tv/) sets.

A set can be watched by clicking on the video thumbnail, which will load it into the main view.
The tracklist for each set has been collated and is included in the set description below the video.

Interact with the application [here](https://bangers-n-mash.herokuapp.com/). Big tunes await!

![alt text](http://i.imgur.com/FAlqR9u.jpg)


## Technologies Used
- ReactJS
- Node.js

Testing:
- Jest - Core testing framework. Enabled snapshot tests.
- Enzyme - allows components to be tested with shallow rendering.

In order to access the required data for the videos, I firstly analysed the YouTube API Data call for each set. I then extracted the relevant properties into my own JSON object, which I stored online via http://myjson.com/. This generated a URI, so that the JSON could be accessed directly.

I then make an API call to this URI, which allows me to use the data of the YouTube videos in my application.

## Installation

If you wish to run this application locally, follow the steps below:  

**1. Install node (if you haven't already)**
```
$ brew install node
```
**2. Clone the repo and install npm**
```
$ git clone https://github.com/Simba14/Bangers-n-Mash.git
$ cd Bangers-n-Mash
$ npm install
```
**3. Set up the local host**
```
$ npm start
```

**4. Run application in browser**
  - Navigate to `http://localhost:3000/` and start interacting with the app.

**5. To Run the tests**

```
$ npm test
```

## User Stories
```
As a user,
So that I know what Sean's favourite DJ sets are,
I want to see them displayed.

As a user,
So that I can watch a set,
I want to be able to play the video.

As a user,
So that I know who I am watching,
I want see the relevant details of the video.

As a user,
To identify a song I like,
I want to be able to see the tracklist for the set.

As a user,
To play a set that interests me,
On clicking it, I wish for it to be displayed in the main view.
```

## Things To Improve On
- Allow users to add their own sets
- I would like to write more detailed unit tests that check whether the correct props have been passed from parent to child. 
