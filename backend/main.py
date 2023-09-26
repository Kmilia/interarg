from flask import Flask, render_template
from flask_restful import Api, Resource, reqparse
from flask import jsonify
import sys
from model_gpt4 import get_feedback

app = Flask(__name__, static_folder='../frontvue/dist/static',
            template_folder='../frontvue/dist')

api = Api(app)


class Feedback(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('argument', location='args',type=str, help='Argument sent for feedback')
        parser.add_argument('topic', location='args',type=str, help='Topic')
        args = parser.parse_args()
        d= get_feedback(args.argument, args.topic)
        print("d results")
        print(d, sys.stderr)
        return jsonify(d)
    
api.add_resource(Feedback, '/api/feedback/')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)