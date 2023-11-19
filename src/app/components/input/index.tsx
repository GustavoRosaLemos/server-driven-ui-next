interface InputComponentProps {
    value?: string;
}

export default function InputComponent({value}: InputComponentProps) {
    return <input value={value} />
}