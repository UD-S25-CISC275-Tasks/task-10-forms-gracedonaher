import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    // state to represent attempts left; initial number 3
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<number>(0); // Initializing reqAttempts

    return (
        // buttons & attempts displayed
        <div>
            <Form.Group controlId="attempts">
                <Form.Label>
                    How many attempts would you like to add: &quot;{reqAttempts}
                    &quot;
                </Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts} // Updating to reqAttempts here
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttempts(Number(event.target.value)); // Correctly handle input change
                    }}
                />
            </Form.Group>
            <Button onClick={() => setAttempts(attempts - 1)}>use</Button>
            to {attempts}.
            <Button onClick={() => setAttempts(attempts + reqAttempts)}>
                gain
            </Button>
            <div>Attempts remaining: &quot;{attempts}&quot;</div>
        </div>
    );
}
