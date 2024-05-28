interface DataItemProps {
  name: string,
  value: number,
}

const DataItem = ({ name, value }: DataItemProps) => {
  return (
    <>
      <span><p>{ name }</p></span>
      <span><p>${ value }</p></span>
    </>
  )
}

export { DataItem };