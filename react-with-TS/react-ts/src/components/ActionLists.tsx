// import { type FC } from "react"

type ActionPlan = {
    id: number,
    title: string,
    description: string
}

type ActionListsProp = {
    lists: ActionPlan[],
    handleDelete: (id: number) => void
}

// Another Way, FC for Functional Component
// const ActionLists: FC<ActionListsProp> = ({ lists }) => { }

const ActionLists = ({ lists, handleDelete }: ActionListsProp) => {
    return (
        <ul>
            {lists.map(item => <li key={item.id}>
                <article>
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </article>
            </li>)}
        </ul>
    )
}

export default ActionLists