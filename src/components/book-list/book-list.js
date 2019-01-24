/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import './book-list.css'

const BookList = ({ list, onDeleteBook }) => {
	const items = list.map(value => (
		<li key={value.id} className="book-list__item">
			<div>{value.bookName}</div>
			<button
				type="button"
				onClick={() => onDeleteBook(value.id)}
				className="book-list__item__button "
			>
				Delete
			</button>
		</li>
	))
	return <ul className="book-list">{items}</ul>
}

BookList.propTypes = {
	list: PropTypes.array,
	onDeleteBook: PropTypes.any,
}
export default BookList
