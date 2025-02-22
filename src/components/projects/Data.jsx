import Project1 from "../../assets/MultiPDFChatbot.png";
import Project2 from "../../assets/Aero.png";
import Project3 from "../../assets/USROAD.png";
import Project4 from "../../assets/TelecomChurn.png";
import Project5 from "../../assets/ATP.png";
import Project6 from "../../assets/Multilung.png";
import Project7 from "../../assets/Steel.png";
import Project8 from "../../assets/NEWS.png";
import Project9 from "../../assets/project3.webp";
import Project10 from "../../assets/Student.png";
import Project11 from "../../assets/SmartLender.png";

export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "📄 Multi-PDF Chatbot with RAG Architecture",
        description : "News Recommendation System",
        category: "AI",
        link:"https://github.com/Nitharshan-C-V/Multi-PDF-Chatbot-with-RAG",
        techStack: ["Streamlit", "PyPDF2", "Langchain","FAISS","HugginFace","Groq API","LLaMa 3(8B)"],
        point1 : "Developed a Retrieval-Augmented Generation (RAG)-based chatbot for interactive multi-PDF document querying. Built the chat interface using Streamlit.Utilized LangChain,Hugging Face embeddings.",
        point2 : "Integrated FAISS vector database,enabling fast and accurate responses. Deployed Groq API with LLaMA 3 for natural language understanding, ensuring seamless document-based Q&A interactions."
    },
    {
        id: 2,
        image: Project2,
        title: "AeroForecast",
        description : "Optimizing Travel Efficiency with Predictive Flight Delay Modelling",
        category: "ML",
        techStack: ["NASA API", "Scikit-learn", "Python"],
        link: "https://github.com/Nitharshan-C-V/Data-Mining-project",
        point1: "Designed a data-driven flight delay prediction system integrating NASA Power API and Bureau of Transportation Statistics data to construct real-time pipelines.",
        point2: " Applied PCA and K-Means for dimensionality reduction, followed by predictive models (Logistic Regression, Naïve Bayes, SVM, XGBoost), improving forecast accuracy by 20%.",
    },
    {
        id: 3,
        image: Project3,
        title: "🚗💥📊US Road Accident Severity Prediction",
        description : "Analysis on road accident and predicting severity based on weather and geographical features",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/Predictive-Modelling-of-US-accidents-based-on-Metrological-and-Geographical-factors",
        techStack: [ "Python","Scikit-learn","K-Means","Unsupervised Learning","EDA","Naive Bayes"],
        point1: "Analyzed U.S. road accident data using Python (Pandas, NumPy) to assess the impact of weather, road conditions, and time-based factors on accident severity.",
        point2: "Machine Learning & Data Analysis: Conducted EDA, Association Rule Mining (ARM), and implemented models like SVM, Gradient Boosting, and Multinomial Naïve Bayes. Gradient Boosting provided the highest accuracy, while Naïve Bayes excelled in text-based severity prediction."
    },
    {
        id: 4,
        image: Project4,
        title: "📊Telecom Customer Churn Analysis",
        description : "Iranian Telecom data Analysis and Churn Prediction ",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/Iranian-Telecom-Churn-Analysis",
        techStack: ["SQL", "R", "Power BI","Logistic Regression","Decision Trees"],
        point1 : "Engineered SQL pipelines to extract and preprocess telecom customer data, enhancing predictive churn modeling. Conducted statistical tests (T-tests, Chi-square, ANOVA) to refine Customer Lifetime Value (CLV) predictions, improving accuracy by 30%. Developed machine learning models (Logistic Regression, Decision Trees) in R, increasing high-risk customer identification by 25%.",
        point2 : " Designed Power BI dashboards, revealing a 40% higher churn rate among pay-as-you-go customers.",
    },
    {
        id: 5,
        image: Project5,
        title: "🎾📈ATP Tennis Match Analysis",
        description : "ATP Tennis match data EDA and match winning predictions",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/ATP-Match-Analysis",
        techStack: ["Python", "Pandas", "Seaborn","Matplotlib","Statistical Analysis","Jupyter Notebook"],
        point1 : "Performed statistical analysis and feature engineering on ATP 2023 match data using Python, Pandas, and NumPy to evaluate player performance metrics and ranking trends.",
        point2 : "Utilized Exploratory Data Analysis (EDA) and correlation analysis to derive insights for opponent scouting, injury prevention, and strategy optimization, with potential applications of advanced ML models.",
    },
    {
        id: 6,
        image: Project6,
        title: "🏥Multi-Lung Disease Prediction Using CNN",
        description : "Multi class Classification of Lung disease based on deep learning technniques ",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/Multi-Lung-Disease-Prediction-Using-CNN",
        techStack: ["TensorFlow", "CNN", "ResNet50","VGG16","EfficientNet","Seaborn","Tkinter"],
        point1 : "Developed a deep learning-based multi-class lung disease classification system using CNNs, VGG16, ResNet50, and EfficientNet B0, achieving a 10.4% accuracy boost.",
        point2 : "Implemented data augmentation, dropout regularization, and ensembling techniques, improving predictive performance by 15%. Designed a real-time Windows application using Tkinter for medical image visualization and rapid decision-making.",
    },
    {
        id: 7,
        image: Project7,
        title: "🔍Steel Plates Anomaly Detection",
        description : "Identified anamolies and faults in steel plates , refining quality of production",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/Steel-Plates-Anomaly-Detection",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib","Scikit-learn", "XGBoost", "Jupyter Notebook", "Statistical Analysis"],
        point1 : "Performed correlation analysis and t-tests for feature selection, followed by Exploratory Data Analysis (EDA) to uncover key patterns, ultimately developing predictive models such as Linear Regression, Decision Trees, and XGBoost.",
        point2 : "mproved model accuracy by 15% and reduced false positives by 12% with XGBoost, enhancing quality control processes and providing actionable insights for detecting anomalies in steel plate production."
    },
    {
        id: 8,
        image: Project8,
        title: "📰Real-Time News Recommendation System",
        description : "News Recommendation System",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/Iranian-Telecom-Churn-Analysis",
        techStack: ["GKE", "Databricks", "BigQuery","PySpark","Kafka","Google Cloud SQL","Looker Studio"],
        point1 : "Built a scalable real-time news recommendation system using Apache Kafka on Google Kubernetes Engine (GKE) for high-throughput data streaming.",
        point2 : "Integrated BigQuery for storage and Databricks with PySpark for dynamic content filtering, reducing ETL latency by 25%.Personalized recommendations were optimized using a similarity threshold of 0.6, boosting user engagement by 30%."
    },
    {
        id: 9,
        image: Project9,
        title: "🎵 Scalable Audio Track Separation API",
        description : "A audio sepereation platform which runs on GKE",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/Iranian-Telecom-Churn-Analysis",
        techStack: ["GCP", "Kubernetes", "Terraform","Python","Redis","Min.io"],
        point1 : "Designed and deployed a Kubernetes-based microservices architecture for real-time audio track separation, leveraging Terraform for infrastructure automation.",
        point2 : "Implemented a REST API for processing requests, Redis for efficient task management, and Min.io for cloud-based object storage, ensuring seamless scalability and high availability."
    },
    {
        id: 10,
        image: Project10,
        title: "🎓📅Student Attendance System",
        description : "Automated Student attendance system using Face Recognition ",
        category: "CV",
        link: "https://github.com/Nitharshan-C-V/Iranian-Telecom-Churn-Analysis",
        techStack: ["OpenCV", "Python", "Haar Cascade"],
        point1 : "Engineered a digital face recognition student attendance system leveraging OpenCV and AdaBoost training to enhance feature extraction efficiency by 10%",
        point2 : "Implemented Haar Cascade Classifiers, achieving 98% face detection accuracy and reducing manual data entry.",
    },
    {
        id: 11,
        image: Project11,
        title: "💵🤖📊Smart Lender",
        description : "SMART LENDER utilizing Cognos Analytics on IBM Cloud ",
        category: "ML",
        link: "https://github.com/Nitharshan-C-V/Iranian-Telecom-Churn-Analysis",
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
        name: "CV",
    },
    {
        name: "AI"
    }
];