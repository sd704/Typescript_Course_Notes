import { useRef, type FormEvent } from "react"

type AddPlanProp = {
    addPlanItem: (title: string, description: string) => void
}

const AddPlan = ({ addPlanItem }: AddPlanProp) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const enteredTitle = titleRef.current!.value
        const enteredDescription = descriptionRef.current!.value
        addPlanItem(enteredTitle, enteredDescription)
    }

    return (
        <form onSubmit={handleSubmit} >
           
                <label htmlFor="title">Your Goal</label>
                <input type="text" name="title" id="title" ref={titleRef} />
            
          
                <label htmlFor="description">Short Summary</label>
                <input type="text" name="description" id="description" ref={descriptionRef} />
            
        
                <button>Add Plan</button>
            
        </form>
    )
}

export default AddPlan