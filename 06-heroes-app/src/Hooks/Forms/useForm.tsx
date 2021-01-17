import { useState } from "react"

export const useForm = (initialState: any = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { currentTarget } = e;
        
        setValues(
            {
                ...values,
                [ currentTarget.name ]: currentTarget.value
            }
        );
    }

    return [ values, handleInputChange, reset ];
}
