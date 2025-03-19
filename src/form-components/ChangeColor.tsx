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
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-red"
                label="red"
                data-testid="red-box"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                type="radio"
                name="blue"
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-blue"
                label="blue"
                data-testid="blue-box"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                type="radio"
                name="green"
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-green"
                label="green"
                data-testid="green-box"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                type="radio"
                name="purple"
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-purple"
                label="purple"
                data-testid="purple-box"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                type="radio"
                name="yellow"
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-yellow"
                label="yellow"
                data-testid="yellow-box"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                type="radio"
                name="pink"
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-pink"
                label="pink"
                data-testid="pink-box"
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                type="radio"
                name="orange"
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-orange"
                label="orange"
                data-testid="orange-box"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                type="radio"
                name="black"
                onChange={updateColor} // Changed "onchange" to "onChange"
                id="color-black"
                label="black"
                data-testid="black-box"
                value="black"
                checked={color === "black"}
            />
            <div>You have chosen "{color}".</div>
        </div>
    );
}
