import { useState } from 'react';

export default function Accordion() {
    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                    <button className={activeKey === 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                        Interdum et malesuada fames ac ante ipsum
                    </button>
                </h2>
                <div id="collapseOne" className={activeKey === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                    <div className="accordion-body">
                        <p>Ever find yourself staring at your computer screen a good consulting slogan to coind yourself sta your computer screen a good consulting slogan.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                    <button className={activeKey === 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                        Interdum et malesuada fames ac ante ipsum
                    </button>
                </h2>
                <div id="collapseTwo" className={activeKey === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                    <div className="accordion-body">
                        <p>Ever find yourself staring at your computer screen a good consulting slogan to coind yourself sta your computer screen a good consulting slogan.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                    <button className={activeKey === 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                        Interdum et malesuada fames ac ante ipsum
                    </button>
                </h2>
                <div id="collapseThree" className={activeKey === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                    <div className="accordion-body">
                        <p>Ever find yourself staring at your computer screen a good consulting slogan to coind yourself sta your computer screen a good consulting slogan.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
