import React from 'react';

const TimeInputPanel = ({ label, id, value, onChange }) => {
    return (
        <div className="time-pick-panel">
            <label htmlFor={id}>{label} :</label>
            <input
                type="number"
                value={value}
                id={id}
                onChange={(e) => {
                    let value = Number(e.target.value);
                    value > 24 ? value = 24 : value < 0 ? value = 0 : value = value;
                    onChange(value);
                }}
                min={0}
                max={24}
                step={1}
                required
            />
        </div>
    );
};

export default TimeInputPanel;