FROM python:3.9.5
ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
RUN mkdir /frontend
RUN pip install --upgrade pip
RUN pip install Django==3.2.7 \
                mysqlclient
