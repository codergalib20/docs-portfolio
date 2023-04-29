import { stack } from '@/fakeData/stacks';
import Container from './container';

const Stack = () => {
    return (
        <Container>
            <div className={`grid grid-cols-12 w-full max-w-4xl mx-auto`}>
                <div className={`col-span-8 border-[1px] p-4 border-[#778899] bg-[#ececec] rounded`}>
                    <h3 className='text-2xl font-bold pb-3 text-[#000000]'>My Stack</h3>
                    <div className='border border-[#778899] bg-[#ffffff] p-4 rounded grid grid-cols-3'>
                        {stack.map((skill: { status: string[], name: string }, index) => {

                            return skill?.status.includes('working') && <div key={index}>{skill?.name}</div>
                        })}
                    </div>
                </div>
                <div className={`col-span-4 border-[1px] p-4 border-[#778899] bg-[#ececec] relative top-10 -left-12`}>
                    <h3 className='text-2xl font-bold pb-3 text-[#000000]'>Exploring</h3>                    <div className='border border-[#778899] bg-[#ffffff] p-4 rounded'>
                        {stack.map((skill: { status: string[], name: string }, index) => {
                            return skill?.status.includes('exploring') && <div key={index}>{skill?.name}</div>
                        })}
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Stack;