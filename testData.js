db = db.getSiblingDB('MarketReaction')
db.users.insert({
    "_id": ObjectId("5551ebbd5284f201b1da7de7"),
    "_class": "com.jassoft.markets.datamodel.user.User",
    "email": "admin.user@market-reaction.com",
    "forename": "Admin",
    "surname": "User",
    "password": "$2a$10$TP3N2.nhH5FFf0xP5xeuDuFsVkYeYossQveJxFSevG2q/iTLmjXz6",
    "activated": true,
    "activationId": "28231a09-2b81-4d4f-b356-ad21b46448e4",
    "roles": [
        "ROLE_ADMIN"
    ],
    "token": "26cfb335-2316-4f1f-811d-fe296c5ab348",
    "tokenExpiry": new Date(1461613616685),
    "lastLogin": new Date(1461012969185)
})