import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)
model = pickle.load(open('GBmodel.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = prediction[0]

    if output == 0:
        text = "Patient may not have Cardiovascular disease."
    else:
        text = "Patient may have Cardiovascular disease."
   
    return render_template('index.html', prediction_text= text)


@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])
    output = prediction[0]

    if output == 0:
        text = "Patient may not have Cardiovascular disease."
    else:
        text = "Patient may have Cardiovascular disease."
    
    response = jsonify({"results": text})
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', '*')

    return response

if __name__ == "__main__":
    app.run(debug=True)