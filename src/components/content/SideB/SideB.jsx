import cardfloat from './stylecomponents/cardback.png';

function SideB() {
    return(
        <>
        <div id='LADO-B' className=' w-full h-full hidden lg:block lg:flex lg:items-center lg:justify-center'>

            <div className='relative h-96 lg:h-fit flex justify-center items-start'>
                <img src={cardfloat} alt="cardART" className='rounded-2xl animate-pinglow z-10  h-auto w-52 lg:w-60 ' />
                <img src={cardfloat} alt="cardART" className='absolute rounded-2xl shadow-sm shadow-purple-700 h-auto w-52  lg:w-60 '/>
            </div>

        </div></>
    )
}

export default SideB