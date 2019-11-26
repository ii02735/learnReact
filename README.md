# ReactJS Learning 
- ## basics :
    - Create App
    - Components basics (class, functional -> **Hooks**)
    - **JSX** syntax
    - Passing data to components for dynamic rendering
        - Working with **props** and **states** + **passing methods to component**
        - ***Two-way binding***
    - Stateless and stateful notions *( **rich component** vs **dumb component** )*
    - Working with **stylesheets**

- ## lists_conditionals

    - Loop of **components** --> usage of ``map()`` in order to **translate** state object in **valid JSX**

        - Optimization for **state manipulation** (from events for example), with **unique identifier** set in *state property* (key from DB database for example).
        Useful for the ``key`` attribute in **component tag**

            - Quick index searching thanks to object state id with ``.findIndex(<Predicate for filtering>)``  

        - Optmization for state **updating** : storing former state in array (***thanks to ES6 spread operator***), instead of writing *manually* => *dynamic components !*

    - Conditions
        - Inside ***return*** of ``render()``, only *ternary operations* are applicables though

        - Before ``render()`` , more pragmatic (freedom of storing JSX in temporary variable)

- ## styling_components : two ways to apply dynamic CSS

It is of course possible to write *CSS stylesheets* for components, but can be problematic if these are used by **multiple** components. The solution would be to write **CSS inside components' code (in JS)**.

However, it has some limitations, because it has an *inline syntax* : ``<div style="style">`` :

- No custom selectors
- No mediaqueries...

There are two solutions :

- Third-party **radium** package
    - Don't forget to import Radium at the concerned component

- CSS Modules : scope CSS stylesheets for **specific components**
    - Adding the *.module.css* extension to the concerned stylesheet (the CSS file MUST have the same as the component does)
    The stylesheet will ONLY be applied for the concerned component, because React will generate an unique HASH for the component (so it will be scoped to the component) :

    ```html
    <div class="App_UNIQUE_HASH"></div>
    ```  

    In earlier versions, en **eject** of the application may be mandatory with ``npm run eject`` in order to unlock configuration files and edit them (add `` modules: true `` at *css-loader* section).

- ## Deep understanding : Better project structuring + Functional and class based components

  - ***Hook lifecycles*** (don't be misunderstood with *Hook React* which is not related) are specific methods that are run in specific timelines :
    - During component *creation* : 
    1. `constructor(props)` is called (constructor component, it is possible to initialize props here)
    2. `getDerivedStateFromProps(props,state)`, which is **rarely used**. This is method is executed when we must update states when **props are changed**.
    3. `render()` to display JSX's component
    4. `componentDidMount()` in order to execute statements AFTER rendering (useful for async instructions or side-effects like **HTTP requests**)
    
        It is also possible to use a *Hook method* when the component is **removed** : `componentWillUnmount()`

    - During component *updating* :
    1. `getDerivedStateFromProps(props,state)` same for creation lifecycle
    2. `shouldComponentUpdate(nextProps,nextState)` allows updating or not (must return **a boolean**)
    3. `render()` for re-rendering the component (don't forget that it will be executed if a **child component** is updated)
    4. `getSnapshotBeforeUpdate(prevProps,prevState)` for managing **previous props or state** before update made
    5. `componentDidUpdate(prevProps,prevState,snapshot)` executed when component is updated. `snapshot` contains the **returned value by** `getSnapshotBeforeUpdate(prevProps,prevState)`

  - For *React Hook* with functional component, it is **not possible to use *lifecycles hooks* methods**. However a workaround is possible thanks to **useEffect()** method :
  ```js
  import React, { useEffect } from 'react';

  const Component = () => { //warning : in order to use useEffect, the variable name must be CAPITALIZED
    useEffect(() => {
        console.log("Component created or updated");
    });
  }
  ```
    useEffect() has functionalities of **two methods** : `componentDidMount()` and `componentDidUpdate()`.
    For unmounting :

    ```js
    const Component = () => {
        useEffect(() => {
            return () => { //function invoked when component is deleted (watcher array must be still empty)
                console.log("Component deleted");
            }
        },[]); //the second parameter is an array that contains watchers (inform React WHEN to execute useEffect, for which props for example)
        
        //If it is empty, useEffect() will be invoked only in the        component creation.
    }
    ```

# Debug

Two ways to debug your application :

- (Native) Browser console debugging tool
- React developer tools browser **plugin**