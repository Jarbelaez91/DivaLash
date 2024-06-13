import React, { useState } from 'react';

const FAQSection = ({ text, darkModeEnabled }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq">
            <h2 className="faq">{text.frequentlyasked.title}</h2>
            <div>
                {Object.keys(text.faq).map((key, index) => (
                    <div key={index}>
                        <p
                            className={`faq-questions ${darkModeEnabled ? "light-mode-faq-questions" : ""}`}
                            onClick={() => handleClick(index)}
                        >
                            {text.faq[key]}
                        </p>
                        {activeIndex === index && (
                            <p className={`faq-answers ${darkModeEnabled ? "light-mode-faq-answers" : ""}`}>
                                {text.faqAnswers[`answer${index + 1}`]}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
