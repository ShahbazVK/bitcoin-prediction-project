from flask import Flask
from pymongo import MongoClient
import json
import bson.json_util as json_util

app=Flask(__name__)
client = MongoClient("mongodb+srv://shahbaz:Kozvg0d1vEwqLOID@cluster0.xnkbr.mongodb.net/?retryWrites=true&w=majority")
db = client.btc
col=db.price
@app.route("/members")
def members():
    prev_results=list(col.find())
    return json_util.dumps(prev_results)

if __name__=="__main__":
    app.run(debug=True)