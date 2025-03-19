import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    // State for edit mode, user name, and student status
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // Toggle the edit mode state
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    // Handle the name change input
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    // Handle the student status change
    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            {/* Switch to toggle edit mode */}
            <div className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={editMode}
                    onChange={toggleEditMode}
                    id="edit-mode-toggle"
                />
                <label htmlFor="edit-mode-toggle">Switch to Edit Mode</label>
            </div>

            {/* Display information when not in edit mode */}
            {
                editMode ?
                    <div>
                        {/* Input field to edit the name */}
                        <input
                            type="text"
                            role="textbox"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <div>
                            {/* Checkbox to toggle student status */}
                            <input
                                type="checkbox"
                                role="checkbox"
                                checked={isStudent}
                                onChange={handleStudentChange}
                                id="student-checkbox"
                            />
                            <label htmlFor="student-checkbox">Student</label>
                        </div>
                    </div>
                    // When not in edit mode, display the name and student status
                :   <div>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </div>

            }
        </div>
    );
}
