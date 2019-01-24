/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './book-controls.css'

class BookControls extends Component {
	state = {
		bookToAdd: '',
	}

	value = ''

	render() {
		return (
			<div>
				<input
					className="add-book__text-field"
					onChange={ev => {
						this.value = ev.target.value
						this.forceUpdate()
					}}
					value={this.value}
				/>
				<button
					className="add-book__button"
					type="button"
					onClick={() => {
						this.props.onAdd(this.value)
						this.value = ''
						this.forceUpdate()
					}}
				>
					Add
				</button>
			</div>
		)
	}
}

BookControls.propTypes = { onAdd: PropTypes.any }
export default BookControls
