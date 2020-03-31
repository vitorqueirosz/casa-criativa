const express = require('express')
const server = express()

const db = require('./db')


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programacao",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime earum quae id provident porro illo possimus rerum",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Jogos",
        category: "Games",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime earum quae id provident porro illo possimus rerum",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Meditacao",
        category: "Meditacao",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime earum quae id provident porro illo possimus rerum",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Design",
        category: "Design",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime earum quae id provident porro illo possimus rerum",
        url: "https://rocketseat.com.br"
    },
]

server.use(express.static("public"))

const nunjucks = require('nunjucks')
nunjucks.configure("views", {
    express: server,
    noCache: true,
});

server.get("/", function(req, res) {

     db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)

        const reversedIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reversedIdeas){
            if(lastIdeas.length < 2){
                lastIdeas.push(idea)
            }
        }

        return res.render("index.html", { ideas: lastIdeas })
       
    })

})

server.get("/", function(req, res) {

    return res.render("/index.html")})

    
server.listen(3000)