import {db} from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'adarsh@gmail.com',
        firstName: "Adarsh",
        lastName: "Jha"
    }
})

console.log('done')