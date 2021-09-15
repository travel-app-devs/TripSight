## DATABASE NOTES

# USER
    -id (auto)
    -first name (string, not required)
    -last name (string, not required)
    -email (string, required, verify)
    -password (string, required, verify)
    -username (string, required, verify)
    -profPicLink (string, required, verify)
    -bio (string, not required)
    -favorites (array of strings, not required, refers to post)

# POST
    -id (auto)
    -title (string, required, verify)
    -textBody (string, not required, verify)
    -titleImageLink (string, not required, verify)
    -bodyImageLinks (array of strings, not required, verify)
    -latitude (number, required, retrieved by geolocation or location entered by user and retrieved using api)
    -longitude (number, required, retrieved by geolocation or location entered by user and retrieved using api)
    -userInfo (object, required, keys are id and pinned (string referring to user, and boolean))
    -albumId (string, not required)

# ALBUM
    -id (auto)
    -posts (array, required)
    -title (string, required)
    -description (string, not required)
    -imageLink (string, not required, verify)
    -userInfo (object, required, keys are id and pinned (string referring to user, and boolean))


higher order functions
closure
gunjs
sveldt
bigchaindb
ethereum smart contracts
solidity
web3js
web 3.0