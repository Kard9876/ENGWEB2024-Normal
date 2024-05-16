var express = require('express');
var router = express.Router();

const axios = require('axios')

const data_api_url = 'http://data\_api:16000'

router.get('/', function (req, res, next) {
    axios.get(data_api_url + '/contratos')
        .then(resp => {
            res.render('index', { title: 'Contratos', contratos: resp.data });
        })
        .catch(err => {
            res.render('error', { error: err, message: "Ocorreu um erro ao obter os dados necessários" })
        })
});

router.get('/entidades/:nipc', function (req, res, next) {
    axios.get(data_api_url + '/contratos?entidade=' + req.params.nipc)
        .then(contratos => {
            let entidade_name = contratos.data[0].entidade_comunicante
            let sum = 0

            for(let i = 0; i < contratos.data.length; i++){
                sum += contratos.data[i].precoContratual
            }

            res.render('entidade', { title: 'Entidade', entidade: { nome: entidade_name, NIPC: req.params.nipc }, contratos: contratos.data, sum : sum });
        })
        .catch(err => {
            res.render('error', { error: err, message: "Ocorreu um erro ao obter os dados da entidade." })
        })
});

router.get('/:id', function (req, res, next) {
    axios.get(data_api_url + '/contratos/' + req.params.id)
        .then(resp => {
            res.render('contrato', { title: 'Contrato', contrato: resp.data });
        })
        .catch(err => {
            res.render('error', { error: err, message: "Ocorreu um erro ao obter os dados do contrato" })
        })
});

module.exports = router;
