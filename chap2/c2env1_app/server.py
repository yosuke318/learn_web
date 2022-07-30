import os, flask
MESSAGE = os.environ['MESSAGE']
PORT = int(os.environ['PORT'])

app = flask.Flask('c2env1_app')
@app.route('/')
def index():
    return MESSAGE
app.run(debug=True, host='0.0.0.0', port=PORT)

#memo　以下の手順
# docker container run --name c2env1_app_base -d python:3.7.5-slim tail -f /dev/nullでpython imageベースのコンテナさくせい
# docker container c2env1_app_base pip install==2.1.1でflask install
# docker container cp server.py c2env1_app_base:/　で本ファイルをコンテナのルートにコピー
# docker container stop c2env1_app_baseでコンテナ停止
# docker container commit c2env1_app_base c2env1_app で新しいイメージc2env1_appをさくせいする

# docker container run --name c2env1_app（イメージ） -p 8081:80 -d -e MESSAGE='hello docker env' -e POET=80 コンテナ名 python -u /server.py
# -e は環境変数、