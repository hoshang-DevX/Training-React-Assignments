// digit leke aayega aut pehle toh segments mai se dekhega ki konsa segment hai
//  jo segment hoga usko map krega
// jahan 1 hoga usko class "on" ka style dedega

import PropTypes from 'prop-types'

function SegmentDisplay({ digit }) {
  
  const segmentPositions = [
    "top",
    "top-right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "top-left",
    "middle"
  ]

  const segments = [
    [1, 1, 1, 1, 1, 1, 0], // 0
    [0, 1, 1, 0, 0, 0, 0], // 1
    [1, 1, 0, 1, 1, 0, 1], // 2
    [1, 1, 1, 1, 0, 0, 1], // 3
    [0, 1, 1, 0, 0, 1, 1], // 4
    [1, 0, 1, 1, 0, 1, 1], // 5
    [1, 0, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 0, 0, 0, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1], // 9
  ];
  if (!Number.isInteger(digit) || digit < 0 || digit > 9) {
    console.error("Invalid digit:", digit);
    return <div>Error: Invalid digit</div>;
  }
  const activeSegment = segments[digit];

  return (
    <div className="digit">
      {activeSegment.map(( isOn , index) => (
        <div key={index} className={` segment ${segmentPositions[index]} ${isOn ? "on" : "off"}`}  />
      ))}
    </div>
  );
}

SegmentDisplay.propTypes = {
  digit: PropTypes.number.isRequired, // Ensures digit is a number and required
};


export default SegmentDisplay;
