# Heart Disease Supervised Learning Risk Analysis 

## Overview

	The individual symptoms and conditions that make up heart disease are the leading cause of death worldwide, they are also largely preventable. The risk factors associated with heart disease are widely known and are assessed in regular doctor’s check ups. This means that it should be able to be analyzed through a machine learning algorithm. This would create a quick and easy analysis tool that takes out some of the human error in how physicians assess this risk.

## Goals
    *To explore a dataset related to cardiac health

    *To create a viable tool for predicting heart disease risk.

    *To better understand the contributing factors in heart disease risk	

## Participant Demographic Info

## Methods 

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
 
## Results 
