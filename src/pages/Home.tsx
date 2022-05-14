import { useParams } from "react-router-dom";
import { Detail } from "./Detail";
import { List } from "./List";

export function Home() {
  const { id } = useParams();

  return (
    <>
      <List />
      <Detail />
    </>
  )
}