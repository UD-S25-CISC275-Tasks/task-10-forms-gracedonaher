import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    // State to control edit mode, name, and student status
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // Toggle the edit mode
    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    // Handle name change
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    // Handle student checkbox change
    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>

            {/* Switch for toggling edit mode */}
            <div className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={isEditMode}
                    onChange={toggleEditMode}
                />
                <label>Switch to Edit Mode</label>
            </div>

            {/* If in edit mode, show the input fields */}
            {
                isEditMode ?
                    <div>
                        <input
                            type="text"
                            role="textbox"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <div>
                            <input
                                type="checkbox"
                                role="checkbox"
                                checked={isStudent}
                                onChange={handleStudentChange}
                            />
                            <label>Student</label>
                        </div>
                    </div>
                    // If not in edit mode, display the current information
                :   <div>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </div>

            }
        </div>
    );
}
