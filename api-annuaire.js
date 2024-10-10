const express = require('express');
const bodyParse = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParse.json());

let users = [
    {
        id: 1, 
        pseudo:"baby shark",
        avatar:"https://w7.pngwing.com/pngs/1009/704/png-transparent-avatar-child-computer-icons-user-profile-smiling-boy-child-face-heroes-thumbnail.png",
        age:8,
        image:{
            james_le_hiboux:"https://img.freepik.com/vecteurs-libre/illustration-hibou-dessin-anime-dessine-main_23-2150373762.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728172800&semt=ais_hybrid",
            seb_la_gazelle:"https://c8.alamy.com/compfr/p4hc01/titre-original-bambi-titre-en-anglais-bambi-directeur-du-film-david-hand-annee-1942-credit-disney-album-p4hc01.jpg",
        },
        score:{
            james_le_hiboux:15,
            seb_la_gazelle:20,
        },

        
    },
    {
        id: 2, 
        pseudo:"dora l'exploratrice",
        avatar:"https://w7.pngwing.com/pngs/1009/704/png-transparent-avatar-child-computer-icons-user-profile-smiling-boy-child-face-heroes-thumbnail.png",
        age:8,
        image:{
            james_le_hiboux:"https://img.freepik.com/photos-premium/hiboux-dans-flamme-brillante-feu-portrait-animal-hibou_861875-7942.jpg",
            seb_la_gazelle:"https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/03/05/04/Le-createur-de-Bambi-est-decede.jpg?VersionId=PGXiz4n1_6mXaUoRyzkb1yVgu2jZjrMy",
        },
        score:{
            james_le_hiboux:150,
            seb_la_gazelle:2000,
        },
    }
];
app.listen(port, () =>{
    console.log(`serveur écoute sur le port ${port}`)
})

app.get('/users', (req, res) =>{
    const taskReferences = users.map(users => `/user/${users.id}`)
    res.json(taskReferences)
})

app.get('/user/:id', (req, res) =>{
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id == userId)
    if(user){
        res.json(user);

    }else{
        res.status(404).json({error:'utilisateur non trouvé'})
    }
})

app.post('/users', (requ, res) => {
    const newUser = {
        id: users.length +1,
        pseudo:requ.body.pseudo,
        avatar:"https://w7.pngwing.com/pngs/1009/704/png-transparent-avatar-child-computer-icons-user-profile-smiling-boy-child-face-heroes-thumbnail.png",
        age:requ.body.age,
        image:{
            james_le_hiboux:"",
            seb_la_gazelle:"",
        },
        score:{
            james_le_hiboux:0,
            seb_la_gazelle:0,
        },

    }
    users = [...users, newUser]
    res.status(201).json({message:"user ajouter avec succès !👌🙌😁", user: newUser})
})