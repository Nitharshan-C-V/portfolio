import React from "react";
import { SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiSpacy, SiOpencv } from "react-icons/si"; // Import ML-specific icons
import Tilt from "react-parallax-tilt"; // Import Tilt

const MachineLearningTools = () => {
    return (
        <Tilt
            options={{
                max: 25, // Maximum tilt angle
                scale: 1.05, // Scale when hovering
                speed: 400, // Speed of tilt
            }}
            className="skills__content"
        >
            <h3 className="skills__title">Machine Learning Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <SiPytorch />
                        <div>
                            <h3 className="skills__name">PyTorch</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiTensorflow />
                        <div>
                            <h3 className="skills__name">TensorFlow</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiKeras />
                        <div>
                            <h3 className="skills__name">Keras</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <SiScikitlearn />
                        <div>
                            <h3 className="skills__name">scikit-learn</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiSpacy />
                        <div>
                            <h3 className="skills__name">Spacy</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiOpencv />
                        <div>
                            <h3 className="skills__name">OpenCV</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    {/* <div className="skills__data">
                        <SiHuggingface />
                        <div>
                            <h3 className="skills__name">Hugging Face</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </Tilt>
    );
}

export default MachineLearningTools;