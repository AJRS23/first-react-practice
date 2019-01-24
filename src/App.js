/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AuthorList from './components/author-list/author-list'
import AuthorDetails from './components/author-details/author-details'
import db from './db.json'

class App extends Component {
	myState = {
		selectedAuthor: null,
		authors: db.authors,
	}

	onSelectedAuthor = id => {
		this.myState.selectedAuthor = this.myState.authors.find(
			value => value.id === id
		)
		this.forceUpdate()
	}

	onDeleteBook = (id, idBook) => {
		const newState = [...this.myState.authors]
		const authorToAddBookPos = newState.indexOf(
			newState.find(value => value.id === this.myState.selectedAuthor.id)
		)
		const bookList = [...newState[authorToAddBookPos].books]
		const bookPosition = bookList.indexOf(
			bookList.find(book => book.id === idBook)
		)
		newState[authorToAddBookPos].books.splice(bookPosition, 1)
		this.myState.authors = newState
		this.forceUpdate()
	}

	onAddedBook = bookName => {
		const newState = [...this.myState.authors]
		const authorToAddBookPos = newState.indexOf(
			newState.find(value => value.id === this.myState.selectedAuthor.id)
		)
		newState[authorToAddBookPos].books.push({
			id: newState[authorToAddBookPos].books.length + 1,
			bookName,
		})
		this.myState.authors = newState
		this.forceUpdate()
	}

	render() {
		const authorDetails = this.myState.selectedAuthor ? (
			<AuthorDetails
				author={this.myState.selectedAuthor}
				onAddBook={this.onAddedBook}
				onDeleteBook={this.onDeleteBook}
			/>
		) : null
		return (
			<div className="container">
				<AuthorList
					list={this.myState.authors}
					onSelectedAuthor={this.onSelectedAuthor}
				/>
				{authorDetails}
			</div>
		)
	}
}

export default App
