from flask import Flask
from flask import render_template
from flask import url_for

app = Flask(__name__)


@app.route('/')
def display_main():
    return render_template('index.html') 

