import Container from "./container"
import Image from 'next/image';

const Hero: React.FC = () => {
    const name: string = 'Hi! 👋 I\'m Asadullah Hil Galib';
    const profession: string = 'I\'m a Sofware Engineer';
    const describe: string = 'I\'m an enthusiastic and detail-oriented Software Engineer to uses my skills in coding, troubleshooting complex designs/Actions/solutions, and assisting in the timely completion of projects. I love focusing on smart concepts with creative, standards-based, accessible Software Development. Also, I\'m always looking for new challenges & new people to meet.'

    return (
        <>
            <Container>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 pb-8 pt-16">
                    <div>
                        <h2 className="text-4xl font-bold inline-block border-t-4 border-black rounded-r-xl">{name}</h2>
                        <h4 className="text-xl font-bold inline-block border-b-2 border-black pb-1 pt-2 rounded-r-xl">{profession}</h4>
                        <p className="text-base text-gray-700 pt-3 text-justify">{describe}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[300px] border-4 border-[#fa6280] h-[300px] relative">
                            <Image src="/images/galib.png" fill alt="Asadullah Hil Galib, codergalib, codergalib20" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Hero