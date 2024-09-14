import Navbar from '../components/navbar';
import Form from '../components/appointement/form'
import Calender from '../components/appointement/calendar'
import Confermed from '../components/appointement/confermed'

const appointment = () => {
    return ( 
        <section className='w-screen h-auto' > 
            <Navbar/>
        <div className='w-screen p-[51px]  flex justify-between bg-custom-gradient mt-[68px]' >
            <Form/>
            <Calender label="Appointment Date" />
           

        </div>
        <Confermed/>
        </section>
       
     
     );
}
 
export default appointment;