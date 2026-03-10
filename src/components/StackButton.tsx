interface StackButtonProps {
    className: string;
    name: string;
}

export default function StackButton({className, name}: StackButtonProps){
    return (
        <div className={`text-xl font-medium font-phudu mb-10 py-1 px-2 rounded-sm border-2 ${className}`}>
            {name}
        </div>
    )
}