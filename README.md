# javascript-fetch

Javascript fetch is good fun! With a few lines of code you can access unbelievable amounts of data, and if you´re motivated to do some webcoding, you can present them too. 

The basic principle is straightforward:

```javascript
async function getData(){
 const askApi = await fetch(`http://api.tvmaze.com/search/shows?q=game of thrones`)
 const json = await askApi.json()
 console.log(json)
}
```
Now, this may look a little strange, so let´s break it up. 

1. We ask the server api.tvmaze.com to return data about shows including "game of thrones" in their title. This is how API´s work - you ask for something, and get data in return - if youre courius, try pasting the URL in your browser: http://api.tvmaze.com/search/shows?q=game%20of%20thrones

2. Asking for data outside of our own webpage, happens asynchronously - in human words, we ask for data, then some time passes, then the data comes back. Therefore we declare our function as *async*.

3. Each time we do something with data inside the function we use *await* to make sure the next line of javascript doesn´t execute before the response has come back. The first thing we do, is to store the response in a varable we call askApi

4. When we have waited a while, askApi is populated with the whoe HTTP response object. We most often want to see the actual body / contents of the response, so we make a new const - json. The json() function returns a Javascript object with the body from the server response.

5. And we are good to go - i.e we can make a small webpage where you can search for tv-shows. 

<a href="https://github.simmoe.io/javascript-fetch">Watch a demo here</a>
