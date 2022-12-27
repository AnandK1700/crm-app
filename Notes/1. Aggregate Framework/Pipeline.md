### MongoDB Pipeline Framework

- Pipeline => [OP1, OP2, OP3, ..., ...] => Basically a bunch or array of operators that acts some tasks on documents of collection sequentially.  

->  first OP1 performs query on documents then only OP2 acts on the result of OP1, then OP3 acts the same on OP2 and so on.

##  CODE on pipeline

 --> let's assume we have a "examples" database, having "movies" as a collection. 
 --> In collection, we have multiple documents in object format having datas as:
                      title, year, genres, rated, languages, released, awards, cast and directors.


 --> var pipeline = [{ $group : {
         _id : "randomId",
         AllAwardsWin : { $sum : "$awards.wins"},  // awards.wins is a nested object
         MinAwardWin : {$min : "$awards.wins"},
         MaxAwardWin : {$max : "$awards.wins"},
         AvgAwardWin : {$avg : "$awards.wins"}

   } }]

   db.movies.aggregate(pipeline)

 
 ## CODE on $group operator
 
 --> For example, we have documents having datas of username, age, and languages and some users have same age, we need to find all users how many have same ages.

 -->  var pipeline = [{ $group : {
            _id : "$age",
            count : {$sum : 1}   // this will count with +1 if we have more than 1.
 } }] 


 ##  CODE on $match Operator

    var pipeline = [{
        $match : {"languages" : "Javascript"} // this will display the documents with languages of Javascript.
    }]


## CODE on $limit operator

    var pipeline = [{
        $match : {"languages" : "Javascript"} 
    }, {$limit : 1}]                          // this will limit the output to 1 only unlike before.



## CODE on $skip operator

    var pipeline = [{
        $match : {"languages" : "Javascript"} 
    }, {$skip : 1}]                          // this will skip the 1st document and display the rest.


## CODE on $unwind operator

- $unwind => If we have languages in documents. languages are C, C++, Java, Python, Javascript. All documents have these languages, then each document split into 5 documents based on languages.


    var pipeline = [ { $unwind: "$languages" },                
                     { $match: { languages: /^C/ } },     // this will select only languages starts with C for example C, C++ .
                     { $group: {
                        _id: "$username",
                        favLanguages: { $push: "$languages" }   // this language acts on previous output in which languages will join based on username in an array
                     } } ]



## CODE on $project operator


    var pipeline = [ { 
        $project: { 
            _id: 0,                               // If we put 0, data will not display, if 1, data will display.
            "Name of User" : "$username",         // we can also rename the column name from project.
            "Language" : "$languages"
         }
     },
     { 
        $unwind : "$Language"
      } ]
              