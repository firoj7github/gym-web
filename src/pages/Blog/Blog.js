import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Question 1: How will you improve the performence of a react application?</h1>
            <br/>
            <p>Ans:React application use depplay now a days.We can’t begin to optimize an app without knowing exactly when and where to optimize. You might be asking, “Where do we start?”

            During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected.

            However, React could end up re-rendering all components in the DOM tree, even though not all are affected. This will result in longer loading time, wasted time, and even wasted CPU resources. We need to prevent this from happening. So, this is where we will focus our optimization effort.</p>
            <br/>
            <h2>Question 2: What are the different ways to mange a state in react application?</h2>
            <br/>
            <p>Ans: very React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
            Hooks
            React Context API
            Apollo Link State</p>
            <br/>
            <h2>Question 3: How does phototypical inheritance work?</h2>
            <br/>
            <p>Ans : If you’ve worked with other object-oriented programming languages such as Java or C++, you’ve been familiar with the inheritance concept.In this programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance.JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.</p>
            <br/>
            <h2>Question 4 : what is unit test? why should write unit test?</h2>
            <br/>
            <p>Ans :Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.  </p>
            <br/>
            <h2>Question 5: you have an array of product.Each object have a name, price and description.how will you implement search product by name?</h2>
            <br/>
            <p>Ans : At first we use usestate hook for data store. then we use use Effect hook for fetch json file. then we use map and divided item.then we use destarching data.at last we implement search product by name.</p>



        </div>
    );
};

export default Blog;