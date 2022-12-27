# Create a collection
Let's create a coolection with 1000 documents.

for(let i=0; i<1000; i++) {
    var user = {
        userId : i,
        username : "user" + "_" + i,
        age : Math.floor(Mathe.random() * 100),
        createdAt : new Date(),
        updatedAt : new Date(),
        countOfFriends : Math.floor(Mathe.random()* 500),
        numberOfPosts : Math.floor(Mathe.random() * 2000)
    };
    db.users.insertOne(user);
}