const quotes = [ `"The Best Way To Get Started Is To Quit Talking And Begin Doing.”`,`“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”`, `“Don’t Let Yesterday Take Up Too Much Of Today.”`, `“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”`, `“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”`];

const inspire = function (quotes) {
    console.log(quotes[Math.floor(Math.random() * quotes.length)])
}


inspire(quotes);