import Leftcard from './leftcard'
import Itemcard from './itemcard'

 
const Ssec2 = () => {
    return ( 
        <section className=" w-screen  pt-[70px] px-12 " >
            <h1 className="text-center mb-10 text-2xl sm:text-4xl font-extrabold  text-black" > A wide range of items </h1>
            <center>
            <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10' > 
            <Leftcard   /> 
            <Leftcard  className=" md:h-[410px] w-[250px] row-span-2 " /> 
            <Leftcard /> 
            <Leftcard  /> 
            <Leftcard /> 
            </div>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   gap-5 mb-10 ' >
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
                <Itemcard/>
            </div>
            </center>

        </section>
     );
}
 
export default Ssec2;