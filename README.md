<br/>
<p align="center">
  <a href="https://github.com/ShaanCoding/ReadME-Generator">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

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

```sh
npm install
```

4. Enter your mongodata base url in `.env`

## Usage

1. create_user:
    input:
           a.name
           b. email
           c. password
           d. dob
     response: user object only
     (no token generate in create user)
     
 2.Login: 
         input:
           a. email,
           b. password
        response: user-object and token

3. Get all user
     headers: token must be pass to headers to get the data
     routes: /userdata

4. Get user by id:
     headers: token must be pass to headers to get the data
     routes: /userdata?_id

5. Delete user by id:
     headers: token must be pass to headers to get the delete the data
     routes: /userdata/delete/:_id





## Acknowledgements

* [ShaanCoding](https://github.com/ShaanCoding/)
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)
* [ImgShields](https://shields.io/)
