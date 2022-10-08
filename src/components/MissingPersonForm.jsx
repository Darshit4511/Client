import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Form = () => {
    const [MissingPerson, setMissingPerson] = useState({
        name: "",
        dob: "",
        contact: "",
        adhar: "",
        finger: "",
        area: "",
        type: "",
    });
    const createMissingPerson = () => {
        axios.post("https://criminal-profiling-server.herokuapp.com/", MissingPerson).then(() => {
            window.location.reload(false);
        })
    };
    return (
        <form>
            <div id='AddMissingPerson' className=" Signin flex flex-col rounded-[2rem] bg-[#1f2e2e]  w-[20rem] xl:w-[30rem] h-[20rem] xl:h-[20rem]  m-auto my-[5rem] text-start items-center justify-center">
                <h2 className=' pt-[25px] text-center my-2 '>Add a Missing Person Report</h2>

                <div className="flex my-2">
                    <span>Name :</span>
                    <input type="text" name="Name" id="Name" className='bg-[#19334d] rounded-[0.5rem] ' value={MissingPerson.name} onChange={(event) => { setMissingPerson({ ...MissingPerson, name: event.target.value }); }} />
                </div>
                <div className="flex my-2">
                    <span>Date of birth : </span>
                    <input type="date" id="birthday" name="birthday" className='bg-[#19334d] rounded-[0.5rem] ' value={MissingPerson.dob} onChange={(event) => { setMissingPerson({ ...MissingPerson, dob: event.target.value }); }} />
                </div>
                <div className="flex my-2">
                    <span>Contact : </span>
                    <input type="text" id="phone" name="phone" className='bg-[#19334d] rounded-[0.5rem] ' value={MissingPerson.contact} onChange={(event) => { setMissingPerson({ ...MissingPerson, contact: event.target.value }); }} />
                </div>
                <div className="flex my-2">
                    <span>Adhar no. : </span>
                    <input type="text" name="Aadhar" id="Aadhar" className='bg-[#19334d] rounded-[0.5rem] ' value={MissingPerson.adhar} onChange={(event) => { setMissingPerson({ ...MissingPerson, adhar: event.target.value }); }} />
                </div>
                <div className="flex my-2">
                    <span>Fingerprint : </span>
                    <input type="text" name="Fingerprint" id="Fingerprint" className='bg-[#19334d] rounded-[0.5rem]' value={MissingPerson.finger} onChange={(event) => { setMissingPerson({ ...MissingPerson, finger: event.target.value }); }} />
                </div>
                <div className="flex my-2">
                    <span>Area : </span>
                    <input type="text" name="Area" id="Area" className='bg-[#19334d] rounded-[0.5rem] ' value={MissingPerson.area} onChange={(event) => { setMissingPerson({ ...MissingPerson, area: event.target.value }); }} />
                </div>
                <div className="flex my-2">
                    <span>Type : </span>
                    <select name="Area" id="Area" className='bg-[#19334d] rounded-[0.5rem] ' value={MissingPerson.type} onChange={(event) => { setMissingPerson({ ...MissingPerson, type: event.target.value }); }} >
                        <option value="Missing">Missing</option>
                        <option value="Warrant">Warrant</option></select>
                </div>


                <button className='m-2 rounded-[1rem] bg-[#7300e6] w-[8rem] h-[2rem]   active:bg-[#5900b3] hover:bg-[#400080] ' onClick={createMissingPerson()}>SIGN IN</button>

            </div>
        </form>

    )
}

export default Form