/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import './author-list-item.css'

const AuthorListItem = ({ id, name, books, onClicked }) => (
	<div className="author-list__item">
		<li>
			<div onClick={() => onClicked(id)}>{`Name: ${name} | Books: ${
				books.length
			}`}</div>
		</li>
	</div>
)

AuthorListItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	books: PropTypes.array,
	onClicked: PropTypes.any,
}

export default AuthorListItem
