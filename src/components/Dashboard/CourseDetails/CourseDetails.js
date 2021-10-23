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
                What Is React?
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
                <Card.Body>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Inspecting the Starter Code
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
                <Card.Body>If you’re going to work on the tutorial in your browser, open this code in a new tab: Starter Code. If you’re going to work on the tutorial locally, instead open src/index.js in your project folder (you have already touched this file during the setup).</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Passing Data Through Props
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="2">
                <Card.Body>We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste. This will help you develop muscle memory and a stronger understanding.</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Making an Interactive Component
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="3">
                <Card.Body>React components can have state by setting this.state in their constructors. this.state should be considered as private to a React component that it’s defined in. Let’s store the current value of the Square in this.state, and change it when the Square is clicked.</Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Lifting State Up
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="4">
                <Card.Body>We may think that Board should just ask each Square for the Square’s state. Although this approach is possible in React, we discourage it because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store the game’s state in the parent Board component instead of in each Square</Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='single-accordion'>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Why Immutability Is Important
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="5">
                <Card.Body>In the previous code example, we suggested that you create a copy of the squares array using the slice() method instead of modifying the existing array. We’ll now discuss immutability and why immutability is important to learn.</Card.Body>
            </Accordion.Collapse>
            </Card>
             

        </Accordion>  
        </div>
    );
};

export default CourseDetails;