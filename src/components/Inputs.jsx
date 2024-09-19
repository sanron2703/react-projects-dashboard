import { forwardRef } from "react"

const Input = forwardRef(function Input({textarea, label, ...props}, ref){
    const inputClasses = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600'
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="uppercase text-sm text-stone-500">{label}</label>
            {textarea ? <textarea className={inputClasses} ref={ref} {...props}/> : <input className={inputClasses} ref={ref} {...props}/>}
        </p>
    )
})

export default Input