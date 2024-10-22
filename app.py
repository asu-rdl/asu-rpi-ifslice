from flask import Flask, request
from flask import render_template

app = Flask(__name__)

@app.route('/')
def display_main():
    return render_template('index.html') 

@app.route("/atten/", methods=["POST"])
def handle_attenuation():
    if request.json is not None:
        req = request.json
        raw_rfout = req['rfout']
        raw_rfin = req['rfin']
    else:
        return "EMPTY DATA", 400

    try:
        rfout = float(raw_rfout)
        rfin = float(raw_rfin)
    except ValueError:
        return "BAD FORMAT", 400
    print(rfout)
    print(rfin)
    return 'OK'

@app.route('/synth/') 
def handle_synthesizer():
    return "not implemented yet, hold on"
