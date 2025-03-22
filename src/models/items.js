import mongoose from 'mongoose'

const ItemsModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O nome do item é obrigatório"]
    },
    price: {
        type: String,
        required: [true, "O preço do item é obrigatório"]
    },
    quantity: {
        type: String,
        required: [true, "A quantidade do item é obrigatória"]
    },
    providers: {
        type: String,
    },
    expirationDate: {
        type: String,
    }

})

export default mongoose.model.items || mongoose.model('items', ItemsModel)

//export default mongoose.model('items', ItemsModel)