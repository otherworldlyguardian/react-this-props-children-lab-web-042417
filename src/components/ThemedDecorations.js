import React from 'react'

class ThemedParty extends React.Component {
  render () {
    return (
      <div>
        {React.Children.map(this.props.children, child => React.cloneElement(child, {
          className: this.props.theme
        }))}
      </div>
    )
  }
}

export default ThemedParty
