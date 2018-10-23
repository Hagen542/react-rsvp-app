import React from 'react'
import PropTypes from 'prop-types'

import Guest from './Guest'
import PendingGuest from './PendingGuest'

const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest) =>
        <Guest
          key={guest.id}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmation(guest.id)}
          handleToggleEditing={() => props.toggleEditingAt(guest.id)}
          setName={text => props.setName(text, guest.id)}
          handleRemove={() => props.removeGuest(guest.id)}
        />
      )}
  </ul>

GuestList.PropTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList