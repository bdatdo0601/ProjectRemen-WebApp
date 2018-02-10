# ADR 7: Restructure Source Directory
## Context
As we continue to develop new feature toward the project, we realize that if we keep our current `src/` structure, 
we will inevitably tangle our code together, making it harder to debug and creating a higher level
of difficulty for new developers to enter and maintain.

## Decision
We decided to come up with a new `src/` structure, based on our research with popular React projects' source code 
(such as [React Starter Kit](https://github.com/kriasoft/react-starter-kit) and [Ant Design Pro](https://github.com/ant-design/ant-design-pro)). Our goal is to create a codebase that is maintainable, easier to
understand and as modular as possible to allow re-usability of already built feature.

Below are the details of our new structure:
```
|-- src/
    |-- index.js                    # Outer most entry point
    |-- index.less                  # General styling for whole app
    |-- registerServiceWorker.js    # CRA pre-generated
    |-- assets/                     # Storing static resources
    |-- components/                 # Reusable components
    |   |-- ExampleComponent/ 
    |   |   |--index.js             # Component itself
    |   |   |--index.less           # Styling for the component
    |-- config/                     # Configuration data
    |   |-- static/
    |-- containers/                 # Complex components (pages)
    |   |-- App.js                  # Entry point of the app
    |   |-- ExampleContainer/
    |   |   |--index.js
    |   |   |--index.less
    |-- redux/                      # Redux components
    |   |-- store.js 
    |   |-- actions/
    |   |-- reducers/
    |-- utils/                      # General functions of the app
        |-- adapter/                # Data converter
        |-- api/                    # Handling API Calls
        |-- js/                     # Utility functions

```
The major changes here are the separation between Containers, Components and Layouts.

* **Component**: React component that takes in props and renders views.
They are reusable, small and used by **Containers** and **Layouts**. (*Ex: DashboardCard - takes in `title` and `value`
as props and renders it*)
* **Containers**: React component that are more complex and have ability to communicate with Redux.
They are combinations of multiple **Component** (*Ex: Dashboard Container - contains multiple DashboardCard and pass in 
props to them*)

**Containers** should always be independence from each other. That means they a **Container** 
will never reference another **Container** . Only **Components** can be nest with each other in 
this new structure.
