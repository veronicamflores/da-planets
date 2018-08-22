let router = require('express').Router()
let Galaxies = require('../models/galaxy')

router.get('/', (req, res, next)=>{
    Galaxies.find({})
    .then(galaxies => res.send(galaxies))
    .catch(next)
})

router.get('/:id', (req, res, next)=>{
    Galaxies.findById(req.params.id)
    .then(galaxy => res.send(galaxy))
    .catch(next)
})

router.post('/', (req, res, next)=>{
    Galaxies.create(req.body)
    .then(galaxy => res.send(galaxy))
    .catch(next)
})

router.put('/:id', (req, res, next)=>{
    Galaxies.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>res.send({
        message: 'Success'
    }))
    .catch(next)
})

router.delete('/:id', (req, res, next)=>{
    then(()=>res.send({
        message: 'Successfully Deleted'
    }))
    .catch(next)
})

module.exports = router