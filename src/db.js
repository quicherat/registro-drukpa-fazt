import mongoose from 'mongoose';
import 'dotenv/config'

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('DB online');
        
    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar DB');
    }



}

export {
    dbConnection
}