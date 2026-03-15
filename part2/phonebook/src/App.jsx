import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonFrom'
import Filter from './components/Filter'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterWord, setFilterWord] = useState('')
  const hook = () => {
    axios.get('http://localhost:3001/persons').then(response => setPersons(response.data))
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
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const personToBeAdded = persons.find(person => person.name==newName)
    if (personToBeAdded) {
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
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
      <Persons persons={persons} word={filterWord} />
    </div>
  )
}

export default App