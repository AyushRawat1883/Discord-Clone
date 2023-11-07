// const User = require('../../models/user');
// const bcrypt = require('bcryptjs');
// const postRegister = async (req , res)=>{
//     try{
//         const {username , mail , password} = req.body;
//         const userExists = await User.exists({mail : mail.toLowerCase()});

//         if(userExists){
//            return res.sendStatus(409).send("Email is already registered"); 
//         }

//         const encryptedPassword = await bcrypt.hash(password,10);

//         const user = await User.create({
//             username , 
//             mail : mail.toLowerCase(),
//             password : encryptedPassword,
//         });

//         //jwt token
//         res.status(201).json({
//             userDetails : {
//                 mail : user.mail,
//                 token : token , 
//                 username : user.username,
//             },
//         })
//     }catch(err){
//         return res.sendStatus(500).send("Error");
//     }
// };

// module.exports = postRegister;

const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postRegister = async (req, res) => {
    try {
        const { username, mail, password } = req.body;
        const userExists = await User.exists({ mail: mail.toLowerCase() });

        if (userExists) {
            return res.status(409).send("Email is already registered");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword,
        });

        // jwt token - assuming you have token defined here
        const token = jwt.sign(
            {
            userId : user._id ,
            mail
            },
            process.env.TOKEN_KEY,
            {
                expiresIn :'24h'
            }
        
        );

        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username,
            },
        });
    } catch (err) {
        res.status(500).send("Error");
    }
};

module.exports = postRegister;
