// In Vite, we can import locally stored images
import notesImg from "./assets/notes.png"
import Header from "./components/Header"
import ActionLists from "./components/ActionLists"
import AddPlan from "./components/AddPlan"
import ActionData from "./data/actionData.json"
import { useState } from "react"

function App() {

  const [lists, setLists] = useState(ActionData)

  const handleDelete = (id: number) => {
    setLists((lists) => lists.filter(item => item.id != id))
  }

  const addPlanItem = (title: string, description: string) => {
    setLists(lists => lists.concat({
      "id": lists[lists.length - 1].id + 1,
      "title": title,
      "description": description
    }))
  }

  return (
    <main>
      <Header image={{ src: notesImg, alt: 'To Do List' }}>
        <h1>Action plan</h1>
      </Header>
      <AddPlan addPlanItem={addPlanItem} />
      <ActionLists lists={lists} handleDelete={handleDelete} />
    </main>
  )
}

export default App
