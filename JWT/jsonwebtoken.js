const jwt = require('jsonwebtoken') 
const fs = require('fs') 
const PUB_KEY = fs.readFileSync(__dirname + '/public_key.pem', 'utf-8')
const PRIV_KEY = fs.readFileSync(__dirname + '/private_key.pem', 'utf-8') 
const payload = {
    sub : '1234567890', 
    name : 'John Doe', 
    admin : true, 
    iat : 1516239033
}
const signedJwt = jwt.sign(payload, PRIV_KEY, {algorithm : 'RS256'})
jwt.verify(signedJwt, PUB_KEY, {algorithms : 'RS256'},((err, payload) => {
    console.log(payload) 
}))
