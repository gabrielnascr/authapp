import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    }, 
    password: {
        type: String,
        required: true,
        select: false
    }
})

export default model('users', UserSchema);