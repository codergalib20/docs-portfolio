type PropsTypes = {
    children: React.ReactNode
}
const Container: React.FC<PropsTypes> = ({ children }) => {
    return <div className="container mx-auto px-4">
        {children}
    </div>
}

export default Container