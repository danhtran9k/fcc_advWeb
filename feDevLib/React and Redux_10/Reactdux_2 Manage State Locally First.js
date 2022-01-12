/*

==================================================================
LINK

https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/manage-state-locally-first

==================================================================
DESCRIPTION

Manage State Locally First
Here you'll finish creating the DisplayMessages component.

First, in the render() method, have the component render an input element, button element, and ul element. When the input element changes, it should trigger a handleChange() method. Also, the input element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.

==================================================================
TESTCASE

The DisplayMessages component should initialize with a state equal to { input: "", messages: [] }.

The DisplayMessages component should render a div containing an h2 element, a button element, a ul element, and li elements as children.

.map should be used on the messages array.

The input element should render the value of input in local state.

Calling the method handleChange should update the input value in state to the current input.

Clicking the Add message button should call the method submitMessage which should add the current input to the messages array in state.

The submitMessage method should clear the current input.

==================================================================
SETUP

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
//        { /* Render an input, button, and ul below this line */ //}

//        { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// ==================================================================



class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };
