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