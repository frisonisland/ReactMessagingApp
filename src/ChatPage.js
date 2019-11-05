import React, {Component} from 'react';

class ChatPage extends Component {
  componentDidMount() {
    // calling the new action creator
    this.props.getMessages();
  }
  render() {
    return (
      <div className="Messages-wrapper">
            {this.props.messages.map((e,i) => {
                 return <div key={i}>{e.body}</div>
              })}
    </div>
  )
  };
}
function mapMessages(state) {
  return {
    messages: state.messages
  }
}

export default connect(
  mapMessages,
  { getMessages }
)(ChatPage);

}

export default Page1;
