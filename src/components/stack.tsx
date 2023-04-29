import { stack } from '@/fakeData/stacks';
import Container from './container';
import Image from 'next/image';

const Stack = () => {
    return (
        <Container>
            <div className={`grid grid-cols-12 w-full max-w-4xl mx-auto py-[200px]`}>
                <div style={{ boxShadow: "0 2px 50px -10px #fe347e" }}
                    className={`order-2 lg:order-1 col-span-12 lg:col-span-8 border-[1px] p-4 border-[#778899] bg-[#ececec] rounded`}>
                    <h3 className='text-2xl font-bold pb-3 text-[#000000]'>My Stack</h3>
                    <div className='border border-[#778899] bg-[#ffffff] p-4 rounded grid grid-cols-2 sm:grid-cols-3'>
                        {stack.map((skill: { status: string[], name: string }, index) => {

                            return skill?.status.includes('working') && <div key={index}>{skill?.name}</div>
                        })}
                    </div>
                </div>
                <div className='hidden sm:block lg:hidden col-span-5'></div>
                <div style={{ boxShadow: "0 2px 50px -10px #fe347e" }}
                    className={`mb-8 order-1 lg:order-2 col-span-10 sm:col-span-7 lg:col-span-4 border-[1px] p-4  border-[#778899] bg-[#ececec] relative top-10 left-6 sm:-left-6 rounded`}>
                    <div className='absolute left-2/4 -translate-x-2/4 -top-14 lg:-top-20  w-2/4 h-2/4 -z-10'>
                        <Image fill src="/shape/earth.png" alt='stack image' />
                    </div>
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