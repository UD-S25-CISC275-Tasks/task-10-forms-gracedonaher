import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const toggleEditMode = () => setIsEditMode(!isEditMode);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={isEditMode}
                    onChange={toggleEditMode}
                    id="edit-mode-toggle" // Ensure unique IDs
                />
                <label htmlFor="edit-mode-toggle">Switch to Edit Mode</label>
            </div>

            {isEditMode ?
                <div>
                    <input
                        type="text"
                        role="textbox"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <div>
                        {/* Ensure checkbox is correctly linked with the label */}
                        <input
                            type="checkbox"
                            role="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                            id="student-checkbox" // Ensure unique ID
                        />
                        <label htmlFor="student-checkbox">Student</label>
                    </div>
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
