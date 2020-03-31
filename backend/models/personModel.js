import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


var PersonSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
});

personSchema.pre('save', function(next){
    let person = this;

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(person.password, salt, function(err, hash){
            person.password = hash;
            next();
        });
    });
});

export default mongoose.model('Person', personSchema);