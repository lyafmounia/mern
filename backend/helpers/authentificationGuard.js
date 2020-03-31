import moment from 'moment';
import jwt from 'jwt-simple';
import Person from '../models/personModel';

export const ensureIsAuthentificated = (req, res, next) => {
    // 1. check if authentification header is giver
    if(!req.headers.authorization){
        return res.status(401).send('token is missing');
    }

    // 2. check if auth bearer
    `Bearer dfjgndjkgjdgfjd`;
    const token = req.headers.authorization.split(' ')[1];

    // 2.1. check if auth bearer is correct
    var payload = null;
    try{
        payload = jwt.decode(token, process.env.TOKEN_SECRET);

    }catch(error){
        return res.statust(401).send('Invalid token');
    }

    // check if Bearer is not expired
    if(payload.exp <= moment().unix()){
       return res.status(401).send('TokenExpired');
    }
    const personId = person.iss;
    Person.findById(personId, (err, person) => {
        if(err){
            return res.status(401).send('PersonNotFound');
        }

        // user is now given the right to use protected
        req.userId = personId;


        next();
    });
};

export default ensureIsAuthentificated;