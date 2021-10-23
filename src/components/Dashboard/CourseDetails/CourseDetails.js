import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'
import './CourseDetails.css'

const CourseDetails = () => {
    return (
        <div className='w-50 mx-auto accordion-list'> 
        <Accordion defaultActiveKey="0">

            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Panel 1
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
                <Card.Body>Body content for panel 1</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Panel 2
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
                <Card.Body>Body content for panel 2</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Panel 3
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="2">
                <Card.Body>Body content for panel 2</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Panel 4
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="3">
                <Card.Body>Body content for panel 2</Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Panel 5
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="4">
                <Card.Body>Body content for panel 2</Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Panel 6
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="5">
                <Card.Body>Body content for panel 2</Card.Body>
            </Accordion.Collapse>
            </Card>
             

        </Accordion>
        </div>
    );
};

export default CourseDetails;