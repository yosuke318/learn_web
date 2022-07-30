import flask
app = flask.Flask('app server')

@app.route('/')
def index():
    return 'Hello Docker'

app.run(debug=True, host='0.0.0.0', port=80)

# 立ち上げたコンテナにコピーするファイル
# docker container run --name base -it-p 8080:80 python bashでコンテナ作成
# todo:コンテナに入りpip install flask ==2.n.nでflaskをインストール
# docker container cp コピー元 コンテナ名:コンテナ内のパス
# exitででるとなぜかコンテナが停止する。
# コンテナに再び入りpython -u /server.pyを実行
# http://localhost:8080/

# ※Flask==2系をつかうべし