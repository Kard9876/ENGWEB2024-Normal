var Contrato = require('../models/contrato')

module.exports.list =  () => {
    return Contrato.find().sort({_id: 1}).exec()
}

module.exports.findById = id => {
    return Contrato.findOne({_id: id}).exec()
}

module.exports.create = periodo => {
    return Contrato.create(periodo)
}

module.exports.update = (id, compositor) => {
    return Contrato.updateOne({_id: id}, compositor)
}

module.exports.delete = id => {
    return Contrato.deleteOne({_id: id})
}

module.exports.listByEntidade = entidade => {
    return Contrato.find({NIPC_entidade_comunicante: entidade}).sort({_id: 1}).exec()
}

module.exports.listByTipo = tipo => {
    return Contrato.find({tipoprocedimento: tipo}).sort({_id: 1}).exec()
}

module.exports.listEntidades = () => {
    return Contrato.find().distinct("entidade_comunicante");
}

module.exports.listTipos = () => {
    return Contrato.find().distinct("tipoprocedimento");
}
