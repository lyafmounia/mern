import Person from '../models/personModel';
import moment from 'moment';
import jwt from 'jwt-simple';

export const signUp = async (req, res) => {
    let person = new Person(req, body);
    var createdPerson = await person.save();

    res.json(createdPerson);
};

export const login = async (req, res) => {
    // {
    //    email: 'email@mail.com
    //    password: 'password'  
    // }
    //

    // 1. check if email exit
    const person = await Person.findOne({ email: req.body.email });
   
    // 2. if email exist, compare password with bcrypt
    if (!person) {
        return res.send('this user does not exist');
    }

    // The user exist at this point
    const password = req.body.password;
    bcrypt.compare(password, person.password, function(error, success){
        if(success){
            const payload = {
                exp: moment().add(1, 'hour').unix(),
                iat: moment().unix(),
                iss: person.id
            };

    
    

        // generate token
        let token = jwt.encode(payload, process.env.TOKEN_SECRET);
        res.json({
            firstName: person.firstName,
            lastName: person.lastName,
            token: `Bearer ${token}`,
            expiration: moment().add(1, 'hour').format('YYYY-MM-DD HH:mm')
        });
        
      }
      res.send('this email and password combinaison is incorrect');
  });

}
