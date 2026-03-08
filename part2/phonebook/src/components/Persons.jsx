const Person = ({person}) => <p>{person.name} {person.number}</p>
const Persons = ({persons, word}) => {
  const persons_to_show = persons.filter(person => (person.name.toLowerCase()).includes(word.toLowerCase()))
  return (
    <div>
      {persons_to_show.map(person => <Person key={person.id} person={person}/>)}
    </div>
  )
}
export default Persons