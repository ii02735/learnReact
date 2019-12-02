//on Windows systems, Aux is a reserved name, please to rename it
//don't need to import anything, because no JSX is written here
const aux = props => props.children;

export default aux;

/**
 * The goal of the HOC is to wrap in a component, other components, so the root is written in JSX
 * It is different from a container : which an HTML root is used
 */