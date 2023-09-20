# Argument feedback backend

## Requirements

- Flask==1.1.1
- Flask-RESTful==0.3.8
- nltk==3.5
- spacy==2.3.2
- scikit-learn==0.23.2
- shortuuid==1.0.1

### Required Spacy models
Download en_core_web_lg model before running the app

python -m spacy download en_core_web_lg

## Running the backend

- Compile the frontend using npm
  cd frontvue
  npm run build
- Export flask app
  export FLASK_APP=main.py

- Run flask app
  flask run --host=0.0.0.0

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
