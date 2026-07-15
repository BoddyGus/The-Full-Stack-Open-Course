const Person = ({person, onDelete}) => <p>{person.name} {person.number} <button onClick={() => onDelete(person)}>delete</button></p>
const Persons = ({persons, word, onDelete}) => {
  const persons_to_show = persons.filter(person => (person.name.toLowerCase()).includes(word.toLowerCase()))
  return (
    <div>
      {persons_to_show.map(person => <Person key={person.id} person={person} onDelete={onDelete}/>)}
    </div>
  )
}
export default Persons
