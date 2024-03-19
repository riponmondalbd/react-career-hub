import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CgMenuBoxed } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, } = job;

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-5">
                <div className="md:col-span-3">
                    <h2 className="mb-6"><span className="font-bold">Job Description:</span> {job_description}</h2>
                    <h2 className="mb-6"><span className="font-bold">Job Responsibility:</span> {job_responsibility}</h2>
                    <h2 className="mb-4"><span className="font-bold">Educational Requirements :</span></h2>
                    <p className="mb-6">{educational_requirements}</p>
                    <h2 className="mb-4"><span className="font-bold">Experiences:</span></h2>
                    <p>{experiences}</p>
                </div>
                <div className="md:col-span-2">
                    <div className="border rounded-lg p-7 mb-6 bg-gradient-to-r from-blue-50 to-cyan-50">
                        <h2 className="text-2xl font-semibold mb-6">Job Details</h2>
                        <hr className="mb-6" />
                        <h2 className="mb-4 flex items-center"><HiOutlineCurrencyDollar className="text-xl mr-2 text-blue-500" />
                            <span className="font-bold ">Salary: </span> {salary} (Per Month)</h2>
                        <h2 className=" mb-8 flex items-center"><CgMenuBoxed className="text-xl mr-2 text-blue-500" /><span className="font-bold">Job Title: </span> {job_title}</h2>
                        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                        <hr className="mb-6" />
                        <h2 className="mb-4 flex items-center"><FiPhone className="text-xl mr-2 text-blue-500" />
                            <span className="font-bold">Phone: </span> {contact_information.phone}</h2>
                        <h2 className="mb-4 flex items-center"><MdOutlineEmail className="text-xl mr-2 text-blue-500" />
                            <span className="font-bold">Email: </span> {contact_information.email}</h2>
                        <h2 className="mb-4 flex items-start"><IoLocationOutline className="text-xl mr-2 text-blue-500" />
                            <span className="font-bold">Address: </span> {contact_information.address}</h2>
                    </div>

                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;