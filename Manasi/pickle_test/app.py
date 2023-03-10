
from flask import Flask, render_template
import pandas as pd
import pickle

app = Flask(__name__)

@app.route('/')
def home():
    # Load the trained model
    
    pickle_in = open("C:/Users/manas/onedrive/Desktop/ClassFolder/module 21/heart_disease_risk/Manasi/codes/knclassifier.pkl","rb")
    model=pickle.load(pickle_in)
    # model = pickle.load(open('classifier.pkl', 'rb'))
    
    # Load the data you want to predict on
    data = pd.read_csv('resources/bmi.csv')
    
    # Predict on the data
    predictions = model.predict(data)

    # Create a list of tuples with the predictions and their indices
    results = [(i, prediction) for i, prediction in zip(range(len(predictions)), predictions)]
    
    # Create a dictionary with the predictions and pass it to the HTML template
    context = {'results': results}
    # file = "C:/Users/manas/onedrive/Desktop/ClassFolder/module 21/heart_disease_risk/Manasi/index.html"
    return render_template('index.html', **context)

if __name__ == '__main__':
    app.run(debug=True)