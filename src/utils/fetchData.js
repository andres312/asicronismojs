const https = require("https");

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            res.setEncoding('utf8');
            if(res.statusCode === 200) {
                let body = '';
                res.on('data', (data) => {
                    body += data;
                });
                res.on('end', () => { 
                    resolve(JSON.parse(body));
                })
            } else reject(new Error(`REQUEST ERROR ON ${url}. Status ${res.statusCode}`));
        })
    })
}

module.exports = fetchData