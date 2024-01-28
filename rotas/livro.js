const {Router} = require ("express")
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require ("../controladores/livro")
const router = Router()

    router.get('/', getLivros)

    router.get('/:id', getLivro)

    router.post('/', postLivro)
    //(req, res) => {
    //  res.send('Você fez uma requisição do tipo POST')
    //    })

    router.patch('/:id', patchLivro)
    //('/', (req, res) => {
    //    res.send('Você fez uma requisição do tipo Patc')
    //})

    router.delete('/:id', deleteLivro)
    
    //(req, res) => {
    //  res.send('Você fez uma requisição do tipo del')
    //})


    module.exports = router