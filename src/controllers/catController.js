import catSchema from "../models/catSchema.js"




const getAllCat = async (req, res) => {
    try {
        let categoria = await catSchema.find()
        res.status(200).json({
            statusCode: 200,
            message: 'Consulta realizada com sucesso!',
            data: {categoria}
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}


const createCat = async (req, res) => {
    try {
        console.log(req.body);
        const newCat = new catSchema(req.body)
        const catSave = await newCat.save()
        res.status(201).json({
            statusCode: 201,
            message: 'Categoria criada com sucesso!',
            data: {catSave}
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

const getOneCat = async (req, res) => {
    try {
        let categoria = await catSchema.findById(req.params.id)
        res.status(200).json({
            statusCode: 200,
            message: 'Consulta realizada com sucesso!',
            data: {categoria}
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

const updateCat = async (req, res) => {
    try {
        let categoria = await catSchema.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        })
        categoria = await catSchema.findById(req.params.id)
        res.status(204).json({
            statusCode: 204,
            message: 'Alteração realizada com sucesso!',
            data: {categoria}
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

const deleteCat = async (req, res) => {
    try {
        let categoria = await catSchema.findByIdAndDelete(req.params.id)
        res.status(202).json({
            statusCode: 202,
            message: 'Categoria deletada com sucesso!',
            data: {}
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

export default {createCat, getOneCat, updateCat, deleteCat, getAllCat}