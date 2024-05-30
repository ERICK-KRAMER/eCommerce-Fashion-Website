interface DataItemProps {
  name: string,
  value: number,
}

const DataItem = ({ name, value }: DataItemProps) => {
  return (
    <>
      <span><p>{ name }</p></span>
      <span><p>${ value.toFixed(2) }</p></span>
    </>
  )
}

export { DataItem };