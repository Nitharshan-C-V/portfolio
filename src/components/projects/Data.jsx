import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";


export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "AeroForecast",
        description : "Optimizing Travel Efficiency with Predictive Flight Delay Modelling",
        category: "ML",
        techStack: ["NASA API", "Scikit-learn", "Python"],
        point1: "Developed AeroForecast, a data-driven system utilizing API extraction to integrate NASA Power API and Bureau of Transportation Statistics data, constructing real-time pipelines to accurately forecast weather-related flight delays.",
        point2: "Deployed unsupervised learning techniques, dimensionality reduction using PCA and K-Means Clustering, followed by predictive models (Logistic Regression, Naïve Bayes, SVM, XGBoost) achieving a 20% improvement in accuracy.",
    },
    {
        id: 2,
        image: Project2,
        title: "Text Summarizer",
        description : "An extractive text summarization model to condense large text volumes.",
        category: "NLP",
        techStack: ["NLTK", "TF-IDF", "Python"],
        point1 : "Architected an extractive text summarization model, applying NLP techniques to condense large text volumes.",
        point2 : "Executed preprocessing with NLTK (tokenization, stop word removal, lemmatization) to enhance accuracy and readability.",
    },
    {
        id: 3,
        image: Project3,
        title: "Student Attendance System",
        description : "Automated Student attendance system using Face Recognition ",
        category: "CV",
        techStack: ["OpenCV", "Python", "Haar Cascade"],
        point1 : "Engineered a digital face recognition student attendance system leveraging OpenCV and AdaBoost training to enhance feature extraction efficiency by 10%",
        point2 : "Implemented Haar Cascade Classifiers, achieving 98% face detection accuracy and reducing manual data entry.",
    },
    {
        id: 4,
        image: Project3,
        title: "Smart Lender",
        description : "SMART LENDER utilizing Cognos Analytics on IBM Cloud ",
        category: "ML",
        techStack: ["IBM Cloud", "Cognos Analytics", "Git"],
        point1 : "Spearheaded the development of the Smart Lender Webpage on IBM Cloud, deploying models (Decision Tree, Random Forest,KNN, XGBoost) using Cognos Analytics, enabling enhanced predictive analytics and improving decision-making by 20%",
        point2 : "Streamlined project management with Git for version control, reducing deployment time by 30% and improving overall project efficiency, with an F1 score of 0.91.",
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "ML",
    },
    {
        name: "NLP",
    },
    {
        name: "CV",
    },
];