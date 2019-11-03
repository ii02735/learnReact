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

