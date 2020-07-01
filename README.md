## Installing dependecies...
npm install for both server and client(cd - /client).
Or delete client folder and then install using the command "npx create-react-app client" and add proxy in package.json.

## CSS or SASS
This project used sass (css). 
(1) The complied version of sass files are stored in CSS folder. If you don't know sass, then link the files in html or import it in app.js(and delete imported scss). 
(2) For those who knows SASS => the main.scss is Imported in app.js for easy convienince. So if you want to use module system, change it for your convenience.   

## Changes to consider
engines in package.json in server,
histry.push in AuthContextProvider (in login and logged)

## To hide credentials
Add .env file outside of server.
{
 "MONGODB_URI",
 "jwtSecretKey"
}

## Hashing password
here we used bcryptjs package. If you need bcrypt, just changed it.  

## For new creation like boilerplate (helps in push)
first remove git in client folder (using rm -rf .git).