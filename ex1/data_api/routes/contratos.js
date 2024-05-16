var express = require('express');
var router = express.Router();

var Contrato = require('../controllers/contrato')

router.get('', function (req, res, next) {
    if (req.query.entidade) {
        Contrato.listByEntidade(req.query.entidade)
            .then(data => res.status(200).jsonp(data))
            .catch(err => res.status(520).jsonp(err))
    } else if (req.query.tipo) {
        Contrato.listByTipo(req.query.tipo)
            .then(data => res.status(200).jsonp(data))
            .catch(err => res.status(520).jsonp(err))
    } else {
        Contrato.list()
            .then(data => res.status(200).jsonp(data))
            .catch(err => res.status(520).jsonp(err))
    }
});

router.get('/entidades', function (req, res, next) {
    Contrato.listEntidades()
        .then(data => res.status(200).jsonp(data))
        .catch(err => res.status(521).jsonp(err))
});

router.get('/tipos', function (req, res, next) {
    Contrato.listTipos()
        .then(data => res.status(200).jsonp(data))
        .catch(err => res.status(521).jsonp(err))
});

router.get('/:id', function (req, res, next) {
    Contrato.findById(req.params.id)
        .then(data => res.status(200).jsonp(data))
        .catch(err => res.status(521).jsonp(err))
});

router.post('', function (req, res) {
    Contrato.create(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(err => res.status(521).jsonp(err))
});

router.put('/:id', function (req, res) {
    Contrato.update(req.params.id, req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(err => res.status(521).jsonp(err))
});

router.delete('/:id', function (req, res) {
    Contrato.delete(req.params.id, req.body)
        .then(data => res.status(202).jsonp(data))
        .catch(err => res.status(521).jsonp(err))
});

module.exports = router;
