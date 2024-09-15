import Leftcard from './leftcard'
import Itemcard from './itemcard'

 
const Ssec2 = () => {
    return ( 
        <section className=" w-screen  pt-[70px] px-12 " >
            <h1 className="text-center mb-10 text-2xl sm:text-4xl font-extrabold  text-black" > A wide range of items </h1>
            <div className='  grid grid-cols-3 gap-3 mb-10' > 
            <Leftcard   /> 
            <Leftcard  className=" h-[410px] w-[250px] row-span-2 " /> 
            <Leftcard /> 
            <Leftcard  /> 
            <Leftcard /> 
            </div>
            <div className='grid grid-cols-5 gap-5 mb-10 ' >
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


        </section>
     );
}
 
export default Ssec2;