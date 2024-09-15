import itemimg from '../../assets/pngwing2.png' 


const itemcard = () => {
    return ( 
        <div className="w-[218px] h-[268px] rounded-[50px] flex-row shadow-xl shadow-slate-400  " >
            <center>
            <div className=' h-2/3 aspect-square pt-10 '  >
             <img src={itemimg}
             alt=""
             
/>
             </div>
           
             <h1 className='text-xl font-bold text-black' >ITEM TITLE</h1>
             </center>
        </div>
     );
}
 
export default itemcard;