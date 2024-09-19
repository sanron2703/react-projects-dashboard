import Input from './Inputs.jsx'
import { useRef } from 'react'
import Modal from './Modal.jsx'

export default function NewProject({onAdd, onCancle}){
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modal = useRef()

    function handleSave(){
        const enteredTitle = title.current.value
        const enetredDescription = description.current.value
        const entereddueDate = dueDate.current.value

        if(enteredTitle.trim() === '' || enetredDescription.trim() === '' || entereddueDate.trim() === ''){
            modal.current.open()
            return
        }

        onAdd({
            title: enteredTitle,
            description: enetredDescription,
            dueDate: entereddueDate
        })
    }

    return(
        <>  
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-900 my-4">Invalid Input</h2>
                <p className='text-stone-700 mb-4'>Oops.. looks like you forgot to enter a value.</p>
                <p className='text-stone-700 mb-4'>Please make sure you provide a valid value for every inputs.</p>
            </Modal>
            <div className='w-[35rem]'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancle}>Cancel</button></li>
                    <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label='Title'/>
                    <Input ref={description} label='Description' textarea/>
                    <Input type="date" ref={dueDate} label='Dew Date'/>
                </div>
            </div>
        </>
        
    )
}