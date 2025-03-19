import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State for the selected answer
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    // Handle the change in selection
    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setSelectedOption(event.target.value);
    };

    // Check if the selected option is correct
    const isCorrect = selectedOption === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                role="combobox"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* Display either a ✔️ or ❌ depending on whether the answer is correct */}
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
