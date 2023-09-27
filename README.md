# InterArg - An Argumentative Feedback System

## Requirements Backend

-   Flask==1.1.1
-   Flask-RESTful==0.3.8
-   nltk==3.5
-   spacy==2.3.2
-   scikit-learn==0.23.2
-   shortuuid==1.0.1
-   openai==0.28.0

**Required Spacy models**

Download en_core_web_lg model before running the app

```
python -m spacy download en_core_web_lg
```

## Requirements Frontend

-   "8": "^0.0.1",
-   "axios": "^1.5.1",
-   "core-js": "^3.32.2",
-   "ngrok": "^5.0.0-beta.2",
-   "register-service-worker": "^1.7.2",
-   "vue": "^3.3.4",
-   "vue-router": "^4.2.5",
-   "vuetify": "^3.3.19",
-   "vuex": "^4.1.0"

## Running the system

-   Compile the frontend using npm

```
cd frontvue && npm run build && cd ..
```

-   Export and run flask app

```
export FLASK_APP=backend/main.py && python3 -m flask run
```

## Querying for feedback

Send request to [/api/feedback/?argument=<text>]

Backend response is a json object such as the following

[/api/feedback/?argument=smoking%20is%20good]
{
"argument": "smoking is good",
"quality": 0.04,
"related_argument": "smoking is good so we should ban it.",
"parent": "smoking has always been a problem."
}

## Project setup Frontend

```
npm install
```

**Compiles and hot-reloads for development**

```
npm run serve
```

**Compiles and minifies for production**

```
npm run build
```

**Run your tests**

```
npm run test
```

**Lints and fixes files**

```
npm run lint
```

**Customize configuration**

See [Configuration Reference](https://cli.vuejs.org/config/).
