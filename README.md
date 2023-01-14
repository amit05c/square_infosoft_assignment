<br/>
<p align="center">
 

  <h3 align="center">ReadME Generator</h3>

 

## Table Of Contents


* [Usage](#usage)


```

### Installation

1. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

2. Install NPM packages

move to server folder then type

```
npm install
```

4. Enter your mongodata base url in `.env`

## Usage

1. create_user:  <br/>
    input: 
           a.name
           b. email
           c. password
           d. dob
           <br/>
     response: user object only
     (no token generate in create user)
      <br/>
     
 2. Login:  <br/>
         input:
           a. email,
           b. password  <br/>
        response: user-object and token
         <br/>

3. Get all user  <br/>
     headers: token must be pass to headers to get the data  <br/>
     routes: /userdata
      <br/>

4. Get user by id:  <br/>
     headers: token must be pass to headers to get the data  <br/>
     routes: /userdata?_id
      <br/>

5. Delete user by id:  <br/>
     headers: token must be pass to headers to get the delete the data <br/>
     routes: /userdata/delete/:_id
      <br/>





