interface InputProps {
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
}

const Input = ({ label, placeholder, type='text' }: InputProps) => {
    
    return (
        <label htmlFor="first-name">
                <span>{label}</span>
            <input type={type} name="firts-name" placeholder={placeholder} />

        </label>        
    );
};

export {Input}