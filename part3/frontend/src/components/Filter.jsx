const Filter = ({value, onChange}) => {
  return (
      <div>
        filter with: <input value={value} onChange={onChange}/>
      </div>
  )
}
export default Filter