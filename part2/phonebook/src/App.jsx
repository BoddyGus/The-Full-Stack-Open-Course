import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonFrom'
import Filter from './components/Filter'
import axios from 'axios'
import personService from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterWord, setFilterWord] = useState('')
  const hook = () => {
    personService.getAll()
    .then(allPersons => setPersons(allPersons))
  }
  useEffect(hook, [])
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterWordchange = (event) => {
    setFilterWord(event.target.value)
  }

  const handleDelete = (person) => {
    const confirmed = window.confirm(`Delete ${person.name}?`)
    if (!confirmed) {
      return
    }
    personService.removeOne(person.id).then(() => {
      setPersons(currentOnes => currentOnes.filter(existing => existing.id !== person.id))
    })
  }
  const addPerson = (event) => {
    event.preventDefault()
    const personToBeAdded = persons.find(person => person.name==newName)
    if (personToBeAdded) {
      const confirmed = window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)
      if (!confirmed) {
        return
      }
      const updatedPerson = { ...personToBeAdded, number: newNumber }
      personService.updateOne(personToBeAdded.id, updatedPerson).then(returnedPerson => {
        setPersons(persons.map(person => person.id === personToBeAdded.id ? returnedPerson : person))
        setNewName('')
        setNewNumber('')
      })
    }
    else{
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personService.addOne(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterWord} onChange={handleFilterWordchange} />
      <h2>Add number</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} word={filterWord} onDelete={handleDelete} />
    </div>
  )
}

export default App