import SideA from './SideA/SideA.jsx';
import SideB from './SideB/SideB.jsx';

function Content() {
    return(
        <>
        <section className='z-0 w-11/12 h-full gap-5 flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:items-center'>
            <SideA />
            <SideB />
        </section>
        </>
    )
}
export default Content