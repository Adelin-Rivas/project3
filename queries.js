const { Pool, Client } = require('pg')

let options = {
  user: 'postgres',
  host: 'localhost',
  database: 'project2',
  password: '0000',     // Enter your own postgres password
  port: 5432,
}
const pool = new Pool(options)
pool.connect();


 
const createUser = (request, response) => {

	console.log('hello');
  const { fname, email,password, lname } = request.body


0
  pool.query('INSERT INTO users (user_first_name, user_last_name, password, email) VALUES ($1, $2, $3,$4)', [fname, lname,password,email], (error, results) => {

    if (error) {

      throw error

    }
	pool.query('SELECT user_first_name,user_last_name,email from users where email = $1', [email], (err, res) => {
		response.send(res.rows[0]);	
	});
    

  })

}








/*
const validate = (request, response) => {
		console.log('getting favs');
  const{email,password}=request.body
	


  pool.query("IF (EXISTS (SELECT * FROM Users WHERE email=[$1]"))
   "email =$1 and password=$2"+
       "ELSE SELECT NULL", [email][password], (error, results) => {
	console.log('something');
    if (error) {
		console.log('error')

      throw error

    }

    response.send(results.rows)

  })

}
*/










const getUserById = (request, response) => {

  const email = 'juan@gmail.com'//request.params.email
  console.log(email)



  pool.query('SELECT user_first_name,user_last_name,email from users where email = $1', [email], (error, results) => {

    if (error) {

      throw error

    }

    response.send(results.rows)

  })


}












	
	

const getUserFavorite = (request, response) => {
		
  const {email} = request.body.email
	


  pool.query('SELECT* from favorites INNER JOIN user_favorites ON favorites.pet_id=user_favorites.pet_id where email = $1', [email], (error, results) => {
	console.log('something');
    if (error) {
		console.log('error')

      throw error

    }

    response.send(results.rows)

  })

}






const getUserSub = (request, response) => {

  const email =request.params



  pool.query('SELECT  from  submission where email = $1', [email], (error, results) => {

    if (error) {
      
      throw error

    }

    response.send(results.rows)

  })

}



const  = (request, response) => {

  const {email,} =request.params



  pool.query('SELECT  from  submission where email = $1', [email], (error, results) => {

    if (error) {
      
      throw error

    }

    response.send(results.rows)

  })

}











module.exports = {
	createUser,
	getUserFavorite,
	getUserSub,
	getUserById 

 

}