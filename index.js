const express = require('express')
const app = express()
let Parser = require('rss-parser');
let parser = new Parser();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    (async () => {

        let feed = await parser.parseURL('https://www.tradingview.com/feed/?stream=crypto');
        let result = []
        
        console.log(feed.title);
    
        feed.items.forEach(item => {
                console.log(item.title);
                result.push(item);
        });

        res.render('index', {feed: feed, objects: result})
    })();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Started at :' + PORT)
})