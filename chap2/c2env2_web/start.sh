sed -e "s/{{PORT}}/$PORT/g" /etc/nginx/nginx.tpl > /etc/nginx/nginx.conf
sed -i -e "s^{{APP_SERVER}}^$APP_SERVER^g" /etc/nginx/nginx.conf
exec nginx -g "daemon off;"

# アプリコンテナへ転送する
# docker container exec c2env_app hostname -i apサーバのIP確認
# 転送できない