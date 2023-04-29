import Container from "./container";

const Header: React.FC = () => {
    return (
        <div
            className="bg-white shadow-md py-2"
            style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}
        >
            <Container>
                <div>
                    <ul>
                        <li>Home</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Header;