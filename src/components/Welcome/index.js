// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscribeButton = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    let {isSubscribed} = this.state
    let authButton
    console.log(isSubscribed)
    if (isSubscribed === true) {
      authButton = 'subscribed'
      isSubscribed = false
    } else {
      authButton = 'subscribe'
      isSubscribed = true
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thankyou! Happy Learning</p>
        <div>
          <button className="button-styles" onClick={this.subscribeButton}>
            {authButton}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
