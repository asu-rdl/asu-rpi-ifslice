from flask import Flask, request
from flask import render_template

import transceiver321.transceiver_serialdriver as ts
transceiver = ts.Transceiver("/dev/ARDUINOATTENUATOR")
import libvalon.valon5009 as valon
synth = valon.Synthesizer("/dev/SYNTHESIZER")
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
        print(transceiver.set_atten(1, rfout))
        print(transceiver.set_atten(2, rfin))
    except ValueError:
        return "BAD FORMAT", 400
    except KeyError:
        return "Unexpected Parameter", 400
    return 'OK'

@app.route('/synth/', methods=["POST"]) 
def handle_synthesizer():
    if request.json is None:
        return "EMPTY DATA", 400
    try:
        req = request.json
        f = float(req['frequency'])
        x = req['fakedata']
        print(type(x))
        w = float(req['power'])

        if f < 20.0:
            return "FREQUENCY TOO LOW", 400
        if w < -15.0:
            return "POWER SETTING TOO LOW", 400
        if w > 15.0:
            return "POWER SETTING TOO HIGH", 400

        synth.set_frequency(2, f)
        synth.set_rf_level(2, w)
    except ValueError:
        return "Not a Number", 400
    except KeyError:
        return "Unexpected Parameter", 400
 
    except Exception as e:
        print(e)
        raise e

    return "OK"
