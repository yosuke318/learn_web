FROM python:3.7-slim
LABEL author=myname@example.com
RUN pip install flask==2.1.1
COPY ./server.py /server.py
ENV PORT 80
CMD ["python", "-u", "/server.py"]

#　一回めのビルドに比べ早い理由として、処理結果をそのまま利用するためです。server.pyを書き換えたのでCOPYコマンドは二回目も実施されます。
# 頻繁に変更が発生する箇所はDockerfileの後半に持ってくるのが良いことがわかります。

# pipでのパッケージインストールはアプリの大枠が決まってしまえば変更される機会が少ないので前半で実施すべきです。
# なお、キャッシュを利用したくない場合はビルド時に「--no-cache」を加えます。