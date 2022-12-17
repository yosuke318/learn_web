FROM golang:1.13.4-alpine3.10
WORKDIR /src
COPY ./main.go /src
RUN go build -o /usr/local/bin/startapp main.go
WORKDIR /
CMD ["/usr/local/bin/startapp"]

# /srcでgo言語のプログラムをコピーして、go buildコマンドでコンパイルして実行ファイル（バイナリ）を「/usr/local/bin」に作成してます。
# ワークディレクトリをルートに戻して、コンテナ実行時にバイナリファイルを起動するようにしています。

# docker image build ./ -t c4app3でビルドしてみるとイメージのサイズが367MBとかなり大きい