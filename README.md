# Heart Disease Supervised Learning Risk Analysis 

## Overview

The individual symptoms and conditions that make up heart disease are the leading cause of death worldwide, they are also largely preventable. The risk factors associated with heart disease are widely known and are assessed in regular doctor’s check ups. This means that it should be able to be analyzed through a machine learning algorithm. This would create a quick and easy analysis tool that takes out some of the human error in how physicians assess this risk.

## Goals

- To explore a dataset related to cardiac health

- To create a viable tool for predicting heart disease risk.

- To better understand the contributing factors in heart disease risk	

## Purpose

- We have pursued this data because heart disease is considered to be mostly preventable disease. 

- Lifestyle changes to diet, excercise, smoking, and drinking are the most obvious things but that doesn't mean people are always aware of their personal risk of heart disease.

- We are attempting to create an easy to use diagnostic tool, something that takes mostly binary considerations in and act as an early warning system for people who may be at risk. 

## Softwares: 

- Anaconda - Python
 
- Jupter Notebook 6.5.2

- Tableau

- Javascript(Flask)

- HTML


## Data 

- The link to the dataset is: [Cardiovascular Disease Dataset](https://www.kaggle.com/datasets/sulianova/cardiovascular-disease-dataset)

- For our purposes it was important to find a dataset that doesn't require advanced medical competency we needed factors that could be easily understood and input by someone without training. 

- The dataset has the following columns which may act as the factors for Cardiovascular disease.

	1. Age
	2. Gender
	3. Height
	4. Weight
	5. Ap_hi (Dystolic Pressure)
	6. Ap_lo (Systolic Pressure)
	7. Cholestrol
	8. Glucose
	9. Smoke
	10. Alcohol
	11. Active
	12. Cardio (Does the patient have cardiovascular disease)


### Participant Demographic Info Cleaned Data

- All partcipants were between the ages of 29 and 65.

- 42,770 Women

- 23,069 Men

- 32,178 participants had some kind of cardiovascular disease

- 25,151 were considered to have a healthy BMI

- 24,329 were considered to be overweight

- 11,723 were considered to be obese

- 4,047 were considered to be severely obese

- 589 were considered to be underweight

- 5,767 were smokers

- No information was provided about race, ethnicity, or socioeconomic background. 


## Methods 

### Communication Protocol

Outside of our class meetings we will update each other daily on progress via Slack additional Zoom meetings will be added as needed. Group members will post next day availability for collaboration on work through slack. Collaborative documents, i.e. a google doc for suggested README.md edits and updates and our final presentation will be done through google workspace first for editing and then added and pushed to the github repository. 


### Data Exploration - ELT (Jacob)

#### Data Exploration

- The link to the visualizations file is [visualizations](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Jacob/visualizations.ipynb)

- Creating a BMI categorical column where all the data is grouped in 5 categories. This is visualized below

![BMI_category](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Jacob/resources/BMI_category.png)

- Plotting a box plot to check the age range.

![age_box](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Jacob/resources/age_box.png)

- Plotting box plots for continuous data columns such as age, height, weight ap-hi and ap_lo.

![bar_continuous](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Jacob/resources/box_continuous.png)

- Plotting bar graphs for categorical data columns such as gender, active, cholesterol,glucose, smoke and alcohol.

![bar_categorical](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Jacob/resources/bar_categorical.png) 

#### Transforming Data

- Using Pandas the original date file heart.csv file was paired down to drop unnecessary columns and data.

![heart_df](https://raw.githubusercontent.com/JGILINGER7/heart_disease_risk/main/Jacob/resources/heart_df.png)

- This work continued with creating new columns to transform the age, which was originally in days to a more standard format of years. Three new columns were also created to make the data easier to understand, height and weight were originally only in metric so columns were created that converted that data to feet and pounds for easier comprehension. Lastly the height and weight data were combined to create a bmi category which would make later machine learning efforts simpler. After these changes were made we removed outliers and possible mistakes in the data. For blood pressure we used a rough standard based around reasonable survival of a cardiac incident. For height and weight we used a removal based on IQRx1.5. 

- Finally we set up two data frames to be exported separately the first heart_cleaner_df contained all columns

![heart_cleaner_df](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Jacob/resources/heart_cleaner.png) 

- The second bmi_df dropped all height and weight info in favor of bmi as a metric 

![bmi_df](https://raw.githubusercontent.com/JGILINGER7/heart_disease_risk/main/Jacob/resources/bmi_df.png)



### Data Analysis - Performing Machine Learning (Manasi)

- The link to the scripts are:

	1. [All Models](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/All_models.ipynb)

	2. [Neural Network](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/Neural_Network_hyper.ipynb)

	3. [Gradient Boosting Classifier](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/Grandient_Boost_pkl.ipynb)

- Using the data from the above step, various machine learning models were tested for their accuracy. 

- The following machine learning models were tested:

|	Model Name		|	Accuracy	|
|-------------------------------|-----------------------|
|Gradient Boosting Classifier 	|	74.2%		|
|				|			|
|Random Forest Classifier	|	73.9%		|
|				|			|
|Logistic Regression		|	73.4%		|
|				|			|
|Support Vector Machines	|	73.2%		|
|				|			|
|Light Gradient Boosting Model	|	71.9%		|
|				|			|
|K - Nearest Neighbors Algorithm|	69.9%		|
|				|			|
|Deep Learning Neural Networks	|	74.3%		|


- Looking at the accuracy score we have choosen to use ***Gradient Boosting Classifier*** for the prediction.

![Accuracy Score](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/images/acc_score.png)

- The Confusion Matrix for the model is shown below.

![Confusion Matrix](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/images/cm.png)

- The Classification Report for the model is shown below.

![Classification Report](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/images/class_report.png) 

- The factors that affect cardiovascular health in descending order are shown below.

![Feature_importance](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/images/Feature_importance.png)

- The factors that affect the most are diastolic pressure, age, cholesterol, BMI(Body Mass Index) and systolic pressure.

- Even thought factors such as gender, alcohol, smoke, glucose and being active have low importance in the dataset, they do sometimes contribute towards the cardiovascular health.

- To justify, we tested the same model after eliminating the above factors. The accuracy of the model was lower than before. Thus we can conclude that these factors do sometimes play a part towards cardiovasular health.

- Below is the image of the accuracy after eliminating few factors.

![acc_removing_features](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/images/acc_remove_features.png) 

- To further understand the correlation between the factors a correlation heatmap is generated.

![correlation_heatmap](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Manasi/images/correlation_heatmap.png)


### SQL & TABLEAU (Sarita)

- There were three tables created so far for the SQL part. Two table where created with the unclean data and the one table that was created with our main clean data BMI table.
 

- On TABLEAU, to demonstrate our visualization, we will be using the heart_cleaner.csv. We have created a Gender Breakdown the following numbers demonstrate women and men. We can observe that we have more data on women than on men.

	1= women
	2= men

![gender_breakdown](https://github.com/JGILINGER7/heart_disease_risk/blob/main/Sarita/images/gender_breakdown.png)

- In BMI_cardio chart we are counting the BMI. The bubbles break it down by BMI(bin) function. It gives us the BMI count as well as the cardio count. 


- In ap_charts, the bar graph is broken-down into men and women showing the diastolic pressure and the systolic pressure. We can observe that women tend to have higher blood pressure levels than men.

<img width="340" alt="Blood Pressure by Gender" src="https://user-images.githubusercontent.com/115046550/227072153-7d05dc5a-1e53-4b47-8e09-4762507c3e3b.png">

- In blood_pressure chart, it shows how blood pressure is a factor in cardiovascular disease.

<img width="1115" alt="Blood pressure" src="https://user-images.githubusercontent.com/115046550/227070986-fcb6d975-ea12-434d-860d-8800e58fd8ba.png"> 

- In the next bar graph it shows how the factors such as cholesterol, smoke, alcohol and blood sugar(glusose) affect in men and women.

<img width="680" alt="Lifestyle Factor" src="https://user-images.githubusercontent.com/115046550/227071358-48414f0b-a1f3-4f84-bcd6-baa23aa202ed.png">

- The chart below shows how having a physically active lifestyle affect cardiovascular health.

<img width="1120" alt="Age Active" src="https://user-images.githubusercontent.com/115046550/227070399-f8c6a3f7-94fd-4a82-a15e-4fdf695fc760.png">
    
- Link to visualizations is: [Heart_disease_risk](https://public.tableau.com/views/heart_disease_risk/HeartDiseaseRisk?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link)
    


### React, HTML, and JavaScript (Sylvia)

## How to Run Back End Form

### Prerequisite Installations

In order to run the backend part of this project, you will need to install `Flask` and the `Flask-Cors` extension. To learn more about Flask and its extension, please reference the following links:

https://pypi.org/project/Flask/
https://pypi.org/project/Flask-Cors/

### Running Flask!
You must `cd` into the correct directory. Navigate to the `Manasi/Gradient Boosting` directory. 

Afterwards, run the following:

```
flask run
```

Please keep this command running in the background while running the frontend part of the project.

## How to Run Front End Form

### Prerequisite Installations

In order to run the frontend part of this project, you will need to install 2 things: `Node` and `NPM`. Fortunately, both parts are available through the link below. Please note that clicking on the link will **immediately** start downloading a software called `nvm for windows`

https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe

This software will install `node` and `npm`. `Node` is an application that allows users to create JavaScript apps without needing to be ran on a web browser. `npm` is a package manager for node, just like how `pip` is a package manager for Python.

Once the program is done downloading, go ahead and run it and keep everything as default during the installation. If you have any terminal open like `cmd`, `powershell`, or `git bash`, close it and reopen it after the installation is done.

Re-open your terminal and then type:

```
nvm
```

You should see a wall of text appear. If your terminal cannot find it then... try reinstalling it again, or [follow the guide from step 2 on this link](https://github.com/coreybutler/nvm-windows/wiki#manual-installation).

After confirming that `nvm` works, run the following command:

```
nvm install 19.3.0
```

This command will install `Node` `version 19.3.0` and the most compatible version of `npm` together.

Once the process is complete, try running the following 2 commands:

```
node -v
npm -v
```

If everything was done correctly, you should see `19.3.0` and `9.2.0` respectively!

If it cannot find node, then you might have to type in the following command first:

```
nvm use 19.3.0
```

Once you run that command, run the two commands above!

### Running the React Application!

Now that you have `node` and `npm` properly set up, running the React application is much simpler!

First you must `cd` into the correct directory. Navigate to the `Sylvia/my-app` directory on `git bash` or `powershell` using any method you'd like.  

From there, you will have to run this **one time command**:

```
npm install
```

This will automatically install all of the packages that are required to run the application. You will know it is successful if you see something along the lines of: `added ## packages` on your terminal!

Once that is done, run the following:

```
npm start
```

Please note that this command will stay running in the background until you close your terminal or do `CTRL+C`. Additionally, the above command will need to be ran every time you want to use the Heart Disease Risk form!

## Conclusion
We were able to get the project past proof of concept and into a functioning app. While time restrictions have kept us from launching the app and running further testing we do intend to launch it in the immediate future. The tool we have created "A Beat Away" functions and can receive data and output if the user is at likely risk for heart disease. Although future improvements in the nuances of the dataset and additional categories that are known to affect heart disease risk will improve the model, we have been able to show that it is possible to use a machine learning algorithm as a diagnostic tool for heart disease.
