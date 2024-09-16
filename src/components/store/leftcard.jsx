import chess from '../../assets/pngwing.com (6) 1.png'


const leftcard = ({ className }) => {
    return ( <div className={` bg-white rounded-[50px] p-10  w-[300px] xl:w-[400px]  ${className} h-[200px] shadow-xl shadow-slate-400  `} >
            <div className="flex justify-center" >
                <img src={chess}
                 alt="" 
                className='w-1/2'  />
                <h1 className='w-1/2 text-center pt-[45px] mb-10 text-2xl sm:text-4xl font-extrabold text-black' >TITLE</h1>
            </div>
    </div> );
}
 
export default leftcard;