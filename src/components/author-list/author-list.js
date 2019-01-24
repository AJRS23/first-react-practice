import React from 'react'
import PropTypes from 'prop-types'
import AuthorListItem from '../author-list-item/author-list-item'
import './author-list.css'

const AuthorList = ({ list, onSelectedAuthor }) => {
	const authorList = list.map(value => (
		<AuthorListItem
			id={value.id}
			name={value.name}
			books={value.books}
			onClicked={onSelectedAuthor}
			key={`author-${value.name}-id${value.id}`}
		/>
	))
	return (
		<div className="author-list-container">
			<ul className="author-list">{authorList}</ul>
		</div>
	)
}

AuthorList.propTypes = {
	list: PropTypes.any,
	onSelectedAuthor: PropTypes.any,
}
export default AuthorList
