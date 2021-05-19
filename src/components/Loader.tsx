import React, { ReactElement } from 'react'

export default function Loader(): ReactElement {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  )
}
