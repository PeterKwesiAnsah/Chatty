const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports={

Mutation:{
    signUp:async (_,{email,password,invitedBy},{createToken,models})=>{
        
        if(!invitedBy){
            //generating hash password
        const salt = await bcrypt.genSalt(saltRounds)
        const hash= await bcrypt.hash(password,salt)

        //creating a user
        const user=await models.User.create({email,password:hash,invitedBy})

        //creating a token for the User
        const token=createToken(user)

        return{
            token,
            user
        }
            
            };

        }
        //use User.id to generate a token
        //return the user and token


    }

}





