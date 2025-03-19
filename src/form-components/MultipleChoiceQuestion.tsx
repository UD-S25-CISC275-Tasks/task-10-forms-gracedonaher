import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track the selected option
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    // Function to handle changes in the selected option
    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setSelectedOption(event.target.value);
    };

    // Determine if the selected option matches the expected answer
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
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
