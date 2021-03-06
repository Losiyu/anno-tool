import React from "react";

export const IndexCell = ({ row, videoSeekTo, setStopTime }) => {
  return (
    <button style={{ textAlign: 'center', width: '100%' }}
      onClick={() => {
        if (parseFloat(row.values.end))
          setStopTime(parseFloat(row.values.end))
        videoSeekTo(parseFloat(row.values.start), true)
      }}
      disabled={isNaN(parseFloat(row.values.start))}
    >{row.index + 1}</button>
  )
}

export const MainCell = ({
  value: initialValue,
  row,
  column: { id },
  updateCell,
}) => {
  const [value, setValue] = React.useState(initialValue)
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <input value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={() => updateCell(row.index, id, value)}
    />
  )
}