import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3); // Initially set to 3
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    return (
        <div>
            <Form.Group controlId="attempts">
                <Form.Label>
                    How many attempts would you like to add: &quot;{reqAttempts}
                    &quot;
                </Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttempts(Number(event.target.value));
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0} // Disable button if no attempts left
            >
                Use
            </Button>
            {/* Only display the remaining attempts in one place */}
            <Button
                onClick={() => {
                    if (reqAttempts > 0) {
                        setAttempts(attempts + reqAttempts);
                    }
                }}
                disabled={reqAttempts <= 0} // Disable if no valid input for gaining attempts
            >
                Gain
            </Button>
            {/* Remove the redundant display of attempts */}
            <div>Attempts remaining: &quot;{attempts}&quot;</div>
        </div>
    );
}
