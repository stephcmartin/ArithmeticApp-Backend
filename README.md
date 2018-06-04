### Arithmetic Question Management API

Back end for Arithmetic Question Management app.  Allows user to view, create, and edit basic arithmetic multiple-choice questions. 

The service is hosted on Heroku using the free hobby tier, which means it will be shut down after a period of no activity. It may take several seconds for a response on the first request while this instance and the back end service are started.

### Build

This was built with a Node API and Mongo database.


### mLab

I worked with MongoDB locally and used mLab for deploying it to Heroku. 

This is really great documentation to learn more:
https://forum.freecodecamp.org/t/guide-for-using-mongodb-and-deploying-to-heroku/19347


### User Stories

###### 1. User can view a list of questions
###### 2. User can view a specific question
###### 3. User can edit a specific question
###### 4. User can add a distractor to a specific question
###### 5. User can change an answer on a specific question
###### 6. User can change a distractor on a specific question
###### 7. User can create a new question with an answer and at least one distractor
###### 8. User can delete a question

## API End-Points

| Verb   | URI Pattern              |
|--------|--------------------------|
| POST  | `/questions`              |
| GET  | `/questions`               |
| GET (By id)  | `/questions/:id`   |
| PATCH   | `/questions/:id`        |    
| DELETE  | `/questions/:id`        |

# CRUD ACTIONS

Using Postman you can doing the following actions:

## CREATE

POST ```https://steph-ps-backend.herokuapp.com/arithmetic```
with JSON BODY: ```{"question" : "what is 8 * 6", "answer" : "48", "distractors": "42" }```

## READ
-  GET: ```https://steph-ps-backend.herokuapp.com/arithmetic```

Gets a list of all questions

-  GET: ```https://steph-ps-backend.herokuapp.com/arithmetic/5b10924070ef6b09da172c57```

Gets question with id ```5b10924070ef6b09da172c57

## UPDATE

PUT: ```https://steph-ps-backend.herokuapp.com/arithmetic/5b109cc7cde1319ee302d518```

with JSON: ```{"question" : "What is 3009 * 5075?", "answer" : "15270675", "distractors": "3572, 8772, 9415" }```


## DELETE

DELETE: ```https://steph-ps-backend.herokuapp.com/arithmetic/5b109b5b020a1200148d7df8```

This deletes the id ```5b109b5b020a1200148d7df8```
