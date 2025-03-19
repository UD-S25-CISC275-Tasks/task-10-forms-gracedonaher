import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3); // Initially set to 3
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    return (
        <div>
            <Form.Group controlId="attempts">
                <Form.Label>
                    How many attempts would you like to add:
                </Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttempts(Number(event.target.value));
                    }}
                />
            </Form.Group>

            {/* Use Button */}
            <Button
                onClick={() => {
                    setAttempts((prev) => prev - 1); // Decrease attempts by 1
                }}
                disabled={attempts <= 0} // Disable button if no attempts left
            >
                Use
            </Button>

            {/* Gain Button */}
            <Button
                onClick={() => {
                    if (reqAttempts > 0) {
                        setAttempts((prev) => prev + reqAttempts); // Add requested attempts
                    }
                }}
                disabled={reqAttempts <= 0} // Disable if no valid input for gaining attempts
            >
                Gain
            </Button>

            {/* Display remaining attempts with a unique element */}
            <div data-testid="attempts-remaining">
                Attempts remaining: {attempts}
            </div>
        </div>
    );
}
