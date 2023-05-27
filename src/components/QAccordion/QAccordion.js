import { Accordion } from 'react-bootstrap';
import React from 'react';


const QAccordion = () => {
    return (
        <div>
            <div>
                <h4>Answer Of Some Of Questions</h4>
            </div>
            <Accordion className='mt-4'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>How does react work?</Accordion.Header>
                    <Accordion.Body>
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What is the difference between props and state?</Accordion.Header>
                    <Accordion.Body>
                        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What does useEffect do?</Accordion.Header>
                    <Accordion.Body>
                        The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default QAccordion;