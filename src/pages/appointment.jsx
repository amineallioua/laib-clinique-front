
import Form from '../components/appointement/form'
import Calender from '../components/appointement/calendar'


const appointment = () => {
    return ( 
        <section className='w-screen ] h-auto' > 
       
        <div className='w-screen  p-5 sm:p-[51px]   flex-row lg:flex  justify-between bg-custom-gradient mt-[68px]' >
           <div className='w-auto rounded-[50px] h-auto overflow-x-scroll ' >
           <Calender label="Appointment Date" />
           </div>
            
            <Form/>

        </div>
     
        </section>
       
     
     );
}
 
export default appointment;