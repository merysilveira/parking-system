import { useParams } from "react-router-dom"

export function ReservationDetails() {
  const { id } = useParams();

  return (
    <h1>License Plates Details {id}</h1>
  )
}