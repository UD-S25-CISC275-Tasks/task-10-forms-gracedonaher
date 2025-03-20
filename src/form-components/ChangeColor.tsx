import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("");

    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    return (
        <div>
            {/* Adding 8 color options as required */}
            <Form.Check
                type="radio"
                name="color"
                value="red"
                label="Red"
                onChange={updateColor}
                checked={color === "red"}
            />
            <Form.Check
                type="radio"
                name="color"
                value="blue"
                label="Blue"
                onChange={updateColor}
                checked={color === "blue"}
            />
            <Form.Check
                type="radio"
                name="color"
                value="green"
                label="Green"
                onChange={updateColor}
                checked={color === "green"}
            />
            <Form.Check
                type="radio"
                name="color"
                value="purple"
                label="Purple"
                onChange={updateColor}
                checked={color === "purple"}
            />
            <Form.Check
                type="radio"
                name="color"
                value="yellow"
                label="Yellow"
                onChange={updateColor}
                checked={color === "yellow"}
            />
            <Form.Check
                type="radio"
                name="color"
                value="pink"
                label="Pink"
                onChange={updateColor}
                checked={color === "pink"}
            />
            <Form.Check
                type="radio"
                name="color"
                value="orange"
                label="Orange"
                onChange={updateColor}
                checked={color === "orange"}
            />
            <Form.Check
                type="radio"
                name="color"
                value="black"
                label="Black"
                onChange={updateColor}
                checked={color === "black"}
            />

            {/* Color Box */}
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                }}
                data-testid="colored-box" // Color box showing the selected color
            />

            {/* Display chosen color */}
            <div data-testid="chosen-color">
                You have chosen &quot;{color}&quot;.
            </div>
            <div>{color}</div>
        </div>
    );
}
