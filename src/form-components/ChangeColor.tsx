import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("");

    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    // List of colors for the radio buttons
    const colorOptions = [
        "red",
        "blue",
        "green",
        "purple",
        "yellow",
        "pink",
        "orange",
        "black",
    ];

    return (
        <div>
            {/* Dynamically render radio buttons from colorOptions array */}
            {colorOptions.map((colorOption) => (
                <Form.Check
                    key={colorOption}
                    type="radio"
                    name="color"
                    value={colorOption}
                    label={
                        colorOption.charAt(0).toUpperCase() +
                        colorOption.slice(1)
                    } // Capitalize the color name
                    onChange={updateColor}
                    checked={color === colorOption}
                    inline
                />
            ))}

            {/* Color Box */}
            <div
                style={{
                    width: "150px",
                    height: "50px",
                    backgroundColor: color,
                    color: "#fff", // Text color to make sure it's visible
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
                data-testid="colored-box" // Color box showing the selected color
            >
                {color ?
                    color.charAt(0).toUpperCase() + color.slice(1)
                :   "Select a color"}{" "}
                {/* Display color name */}
            </div>

            {/* Display chosen color */}
            <div data-testid="chosen-color">
                You have chosen {color ? color : "no color"}
            </div>
        </div>
    );
}
