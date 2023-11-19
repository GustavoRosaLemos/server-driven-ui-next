export interface ButtonComponentProps {
    value: string;
}

export default function ButtonComponent({value}: ButtonComponentProps) {
    return <button>{value}</button>
}