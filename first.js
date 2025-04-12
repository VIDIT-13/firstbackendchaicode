require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata={
    "login": "mojodna",
    "id": 45,
    "node_id": "MDQ6VXNlcjQ1",
    "avatar_url": "https://avatars.githubusercontent.com/u/45?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojodna",
    "html_url": "https://github.com/mojodna",
    "followers_url": "https://api.github.com/users/mojodna/followers",
    "following_url": "https://api.github.com/users/mojodna/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojodna/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojodna/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojodna/subscriptions",
    "organizations_url": "https://api.github.com/users/mojodna/orgs",
    "repos_url": "https://api.github.com/users/mojodna/repos",
    "events_url": "https://api.github.com/users/mojodna/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojodna/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.get('/twitter',(req,res)=>{
    res.send('this is now x by Elonn Musk!!')
})
app.get('/login',(req,res)=>{
    res.send('Login')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})