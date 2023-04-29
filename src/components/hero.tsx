import Container from "./container"

const Hero: React.FC = () => {
    const name: string = 'Hi! I\'m Asadullah Hil Galib';
    const profession: string = 'I\'m a Sofware Engineer';

    return (
        <>
            <Container>
                <div className="grid grid-cols-2">
                    <div>
                        <h2>{name}</h2>
                        <h4>{profession}</h4>
                    </div>
                    <div></div>
                </div>
            </Container>
        </>
    )
}

export default Hero