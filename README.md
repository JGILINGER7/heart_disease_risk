# Heart Disease Supervised Learning Risk Analysis 

## Overview

The individual symptoms and conditions that make up heart disease are the leading cause of death worldwide, they are also largely preventable. The risk factors associated with heart disease are widely known and are assessed in regular doctor’s check ups. This means that it should be able to be analyzed through a machine learning algorithm. This would create a quick and easy analysis tool that takes out some of the human error in how physicians assess this risk.

## Goals

- To explore a dataset related to cardiac health

- To create a viable tool for predicting heart disease risk.

- To better understand the contributing factors in heart disease risk	

## Participant Demographic Info

## Methods 

### Communication Protocol

Outside of our class meetings we will update each other daily on progress via Slack additional Zoom meetings will be added as needed. Group members will post next day availability for collaboration on work through slack. Collaborative documents, i.e. a google doc for suggested README.md edits and updates and our final presentation will be done through google workspace first for editing and then added and pushed to the github repository. 

### ELT (Jacob)

Using Pandas the original data csv was paired down to drop unnecessary columns and data. This work continued with creating new columns to transform the age, which was originally in days to a more standard format of years. Three new columns were also created to make the data easier to understand, height and weight were originally only in metric so columns were created that converted that data to feet and pounds for easier comprehension. Lastly the height and weight data were combined to create a bmi category which would make later machine learning efforts simpler. After these changes were made we removed outliers and possible mistakes in the data. For blood pressure we used a rough standard based around reasonable survival of a cardiac incident. For height and weight we used a removal based on IQRx1.5. 

### Performing Machine Learning on the transformed dataset. (Manasi)

Using the data from the above step, various machine learning models are tested for their accuracy. The best performing model will be chosen to predict the outcome for this dataset.

The following machine learning models will be tested:

    1. Random Forest Classifier

    2. Gradient Boosting Classifier

    3. Logistic Regression

    4. Balanced Random Forest

    5. Support Vector Machines

    6. Light Gradient Boosting Model

    7. K - Nearest Neighbors Algorithm

    8. Deep Learning Neural Networks

### SQL & TABLEAU (Sarita)
	There had been Three tables created so far for the SQL part 

- On the TABLEAU to demonstrate our visualization we will be using the heart_cleaner.csv. while using this file we have created a Gender Breakdown the following numbers demonstrate women or men

	1= women
	2= men

- On our first sheet (BMI_cardio) we are counting the BMI. On our sheet the bubbles break it down by BMI(bin) function. It also gives us the BMI count as well as the cardio count. 

- On Sheet 3(ap_charts) it two bar charts broken down in men and women. In these bar chart we are showing the ap_hi and the ap_lo of men vs women. In these bar chart it shows that women tend to have higher AP levels than men, even their ap_lo is higher on women. I believe because we have more data on women than men.

- 
    
- Link to visualizations is: [Heart_disease_risk] https://public.tableau.com/views/heart_disease_risk/BMI_cardio?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link
    
### HTML and Java (Sylvia)
Currently working on the back-end web development. Will be incorporating Tableau visualizations. An initial skeleton HTML code was uploaded.

## Results 
