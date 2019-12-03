import React, { PureComponent } from "react";
import Aux from "../../../HOC/Aux"
import userStyles from './User.module.css';
import withClass from "../../../HOC/WithClass";
import PropTypes from "prop-types";
import AuthContext from  "../../../context/auth-context";
/**
 * Because we can't use lifecycle methods
 * We must convert into a class based component
 */

class User extends PureComponent {
    
    componentDidMount()
    {
        console.info("User component successfully created");
        //this.inputElement.focus();  //when the component will be mounted, it will be focused
        //Logically : the last element will be focused, because the focus change when a component is mounted
        //And the component that will save the focus is effect, will be the last one because there is no other components after it.
        //Second way with constructor
        this.inputElementRef.current.focus();


    }

    /**
     * The second way, with the ref is through a constructor
     */

    constructor(props)
    {
        super(props); //ALWAYS !
        //We will create a Ref element
        this.inputElementRef = React.createRef();
    }
    
    // shouldComponentUpdate(nextProps,nextState)
    // {
    //     if(nextProps.children !== this.props.children || nextProps.length === 1) //don't forget the props's attribute
    //     {
    //         /**
    //          * Same here : because User is in Users (which is in App), a change will provoke Users to update, hence ALL the User components will be updated
    //          * So we keep only the correct User to be updated, we'll keep the other one untouched by an new useless update
    //          */
    //         console.info("%c[User.js] Props changed : updating...","color : orange");
    //         return true;
    //     }
    //     console.info("[User.js] No changes detected : preventing");
    //     return false;
    // }


    componentDidUpdate()
    {
        console.warn("User component updated");
    }

    render(){    

        //Pass as adjacent JSX, without root element (warning : loss of onClick callback + CSS class)
        /*
        return [ //warning ! Must assign a KEY for each element in array, IT CAN BE redundant though ...
            <h4 key="name">{this.props.name == null ? "Unknown" : this.props.name}</h4>,
            <hr key="hr"></hr>,
            <p key="children">{this.props.children == null ? "Nothing to say..." : this.props.children}</p>/*children (special prop attribute) refers to content between the opening and the closing tags,
            <input key="input" type="text" value={this.props.children} onChange={this.props.changed} />,
            <button key="button" onClick={this.props.delete} className={userStyles.delete}>Delete user</button>
        ];*/

        //third way : use HOC (High Order Component, which is a component that wraps others)

        //What about accessing to the HTML of a component ? To modify dynamically with JQuery ?

        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated  ? <p>Authenticated !</p> : <p>Please login !</p>}
                    {/* However it won't do anything because we must also manage the button event --> cockpit */}
                </AuthContext.Consumer>
                { console.log(this.props.isAuth) }
                {
                /* it is kinda laborious/redundacy to pass that prop :
                   App (state = authenticated) -> Users (props = isAuth) -> User 
                   Users here is only for forwarding this props --> less maintenable (because we are forced to pass the props for Users) 
                   So Users component doesn't really care about the isAuth props
                   See context up 
                */
                }
                <h4>{this.props.name == null ? "Unknown" : this.props.name}</h4>
                <hr></hr>
                <p>{this.props.children == null ? "Nothing to say..." : this.props.children}</p>{/* children (special prop attribute) refers to content between the opening and the closing tags*/}
                {/**
                 * Remember that we can easily write JS in JSX, surrond it with {}
                 * But how can we retrieve the id of a specific element ? We could add an id, but React make these things easier
                 * Passing a function to ref is a first way (for older versions)
                 * By assigning a Ref to the props, the PARENT CAN USE that ELEMENT, that's why IF POSSIBLE
                 * The only conventionnal way when the parent interacts with its children, is from the PROPS.
                 * To update a child, we change a prop. However, sometimes we don't want to change a PROP, for like manage the text selection, animations...
                 * Actions that don't require data update : we use Refs.
                 */}
                <input /*ref={(inputEl) => {this.inputElement = inputEl}} second way : */ ref={this.inputElementRef} type="text" value={this.props.children} onChange={this.props.changed} />
                <button onClick={this.props.delete} className={userStyles.delete}>Delete user</button>
            </Aux>
        ); 
    }
}

/**
 * For better maintenance in other teams
 * And better underdansting if it is a library used
 * by others, it is strongly recommended to define types
 * for the props :
 * <Prop name> = PropTypes.<type : func, string, number...>
 */

User.propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
    changed: PropTypes.func,
    delete: PropTypes.func
}

export default withClass(User,userStyles.User); //won't be sufficient because props are USED here