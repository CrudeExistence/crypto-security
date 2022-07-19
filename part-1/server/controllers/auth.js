const bcrypt = require('bcryptjs')

const users = []

module.exports = {

  //! here's the issue. The log in isn't finding anything to try and compare against so it's stopping me right there in my tracks.
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      const salt = bcrypt.genSaltSync(5)
      const passHash = bcrypt.hashSync(password, salt)

      let userObj = {
        passHash,
        username: [username]
      }

      console.log(userObj)

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === userObj.username && users[i].passHash === userObj.passHash) {
          console.log("it's not getting here")
          delete userObj.passHash
          res.status(200).send(userObj)
        }
      }
      console.log('passwords arent matching I thinks')
      res.status(400).send("User not found.")
    },

    //! I need to ask about this. The password is giving a completely different hash and they aren't comparing because they're so different. I looked online and saw that there is a .compare or a .compareSync and I am missing it completely from my code
    //* {
    //*   passHash: '$2a$05$aELRwQOeNZ0s93IhqvfLeuKgQP7w6vxxft3bWHEHJ7zxGuAoQ7EiK',
    //*   username: [ 'crude' ],
    //*   email: [ 'crude' ],
    //*   firstName: [ 'crude' ],
    //*   lastName: [ 'crude' ]
    //* }
    //* Logging In User
    //* { username: 'crude', password: 'crude' }
    //* {
    //*   passHash: '$2a$05$X8m3Ry519D0X7G94pHB4GeP6hvOAFJPKHaQFBYDz.g61q/WEVuWSS',
    //*   username: [ 'crude' ]
    //* }


    // register appears to be working just fine but I'm not sure if it's sending the body like I need it to to the db
    register: (req, res) => {
        console.log('Registering User')
        const {username, email, firstName, lastName, password} = req.body 
        createUser: (req, res) => {
          for(let i=0; i<users.length; i++){
            const existing = bcrypt.compareSync(password, users[i].passHash)

            if(existing){
              let userToCheck = {...users[i]}
              delete userToCheck.passHash
              
              res.status(200).send(userToCheck)
              console.log("person exists")
              return
            } 
          }

        }


        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)
        
        let userObj = {
          passHash,
          username: [username],
          email: [email],
          firstName: [firstName],
          lastName: [lastName]
        }

        let userToReturn = {...userObj}
        users.push(userObj)
        // delete userToReturn.passHash
        console.log(userToReturn)

        res.status(200).send(userToReturn)


    }
}

