import { useState } from "react";
import accordionData from "./data";
import "./index.css";
const Accordian = () => {
  const [selectedAccorian, setSelectedAccordian] = useState();
  const [enableMultipleSelection, setEnableMulitpleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelectedAccordian(id === selectedAccorian ? null : id);
  };

  const handleMultiSelection = (id) => {
    let cpyOfMultiple = [...multiple];
    const findIndexofCurrentIndex = cpyOfMultiple.indexOf(id);
    if (findIndexofCurrentIndex === -1) {
      cpyOfMultiple.push(id);
    } else {
      cpyOfMultiple.splice(findIndexofCurrentIndex, 1);
    }
    setMultiple(cpyOfMultiple);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMulitpleSelection(!enableMultipleSelection);
        }}
      >
        Enable Multi-Selection
      </button>
      <div>
        {accordionData.length > 0 ? (
          accordionData.map((eachItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultipleSelection
                    ? () => {
                        handleMultiSelection(eachItem.id);
                      }
                    : () => {
                        handleSingleSelection(eachItem.id);
                      }
                }
              >
                <h3>{eachItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multiple.includes(eachItem.id)  && (
                    <div className="content">{eachItem.answer}</div>
                  )
                : selectedAccorian === eachItem.id && (
                    <div className="content">{eachItem.answer}</div>
                  )}
              {/* {selectedAccorian === eachItem.id ||
              multiple.indexOf(eachItem.id) !== -1 ? (
                <div className="content">{eachItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>
            <h1>No data</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
