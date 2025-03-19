import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Import Form from react-bootstrap

export function ChangeColor(): React.JSX.Element {
    // state / model
    const [color, setColor] = useState<string>("");

    // control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    // view
    return (
        <div>
            <Form.Check
                type="radio"
                name="red"
                onChange={updateColor}
                id="color-red"
                label="red"
                data-testid="red-box"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                type="radio"
                name="blue"
                onChange={updateColor}
                id="color-blue"
                label="blue"
                data-testid="blue-box"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                type="radio"
                name="green"
                onChange={updateColor}
                id="color-green"
                label="green"
                data-testid="green-box"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                type="radio"
                name="purple"
                onChange={updateColor}
                id="color-purple"
                label="purple"
                data-testid="purple-box"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                type="radio"
                name="yellow"
                onChange={updateColor}
                id="color-yellow"
                label="yellow"
                data-testid="yellow-box"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                type="radio"
                name="pink"
                onChange={updateColor}
                id="color-pink"
                label="pink"
                data-testid="pink-box"
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                type="radio"
                name="orange"
                onChange={updateColor}
                id="color-orange"
                label="orange"
                data-testid="orange-box"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                type="radio"
                name="black"
                onChange={updateColor}
                id="color-black"
                label="black"
                data-testid="black-box"
                value="black"
                checked={color === "black"}
            />
            <div>You have chosen &quot;{color}&quot;.</div>{" "}
            {/* Escaped quotes */}
        </div>
    );
}
