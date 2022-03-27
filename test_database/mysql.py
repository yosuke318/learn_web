from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String
from sqlalchemy.ext.declarative import declarative_base
import pymysql

Base = declarative_base()


class TestMysql(Base):
    __tablename__ = "user2"  # テーブル名を指定
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    age = Column(Integer)

    def create_table(self):
        engine = create_engine("mysql+pymysql://root:supervegeta318@localhost/test_database?charset=cp932")
        Base.metadata.create_all(engine)

    def insert_db(self):
        engine = create_engine("mysql+pymysql://root:supervegeta318@localhost/test_database?charset=cp932")
        user_a = TestMysql(first_name="first_a", last_name="last_a", age=20)
        SessionClass = sessionmaker(engine)  # セッションを作るクラスを作成
        session = SessionClass()
        session.add(user_a)
        session.commit()


