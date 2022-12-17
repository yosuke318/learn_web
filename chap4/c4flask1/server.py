import os, flask
PORT = int(os.environ['PORT'])
app = flask.Flask('app server')
@app.route('/') #localhost:8080
# @app.route('/api/v1/hello')# http://localhost:8080/api/v1/hello
def index():
    return 'hello Dockerfile'
app.run(debug=True, host='0.0.0.0', port=PORT)