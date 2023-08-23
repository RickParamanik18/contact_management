interface btnType {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "reset" | "button" | undefined;
    children: string;
}

const Button = (props: btnType) => {
    const { children, onClick = () => {}, type = "button" } = props;
    return (
        <button
            className="bg-[color:var(--primary)] text-white py-3 px-6 m-2 rounded-md"
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
