import { AiOutlineDollar } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("You have applied successfully");
  };

  return (
    <div>
      <h2 className="text-[32px] font-extrabold text-center my-28">
        Job Details
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className=" md:col-span-3">
          <p className="mb-6">
            <span className="font-extrabold">Job Description: </span>
            {job.job_description}
          </p>
          <p className="mb-6">
            <span className="font-extrabold">Job Responsibility: </span>
            {job.job_responsibility}
          </p>
          <p className="mb-6">
            <span className="font-extrabold">Educational Requirements: </span>
            <br />
            {job.educational_requirements}
          </p>
          <p>
            <span className="font-extrabold">Experiences: </span>
            <br />
            {job.experiences}
          </p>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-7 rounded-lg mb-6">
            <h2 className="text-xl font-extrabold mb-6">Job Details</h2>
            <hr />
            <h2 className="flex mt-6">
              <AiOutlineDollar className="text-2xl mr-2" />
              <span>
                <span className="font-extrabold">Salary : </span>
                {job.salary} (Per Month)
              </span>
            </h2>
            <h2 className="flex mt-6">
              <IoCalendarOutline className="text-2xl mr-2" />
              <span>
                <span className="font-extrabold">Job Title : </span>
                {job.job_title}
              </span>
            </h2>
            <h2 className="text-xl font-extrabold mt-8 mb-6">Contact Info</h2>
            <hr />
            <h2 className="flex mt-6">
              <CiPhone className="text-2xl mr-2" />
              <span>
                <span className="font-extrabold">Phone : </span>
                {job.contact_information.phone}
              </span>
            </h2>
            <h2 className="flex mt-6">
              <MdOutlineEmail className="text-2xl mr-2" />
              <span>
                <span className="font-extrabold">Email : </span>
                {job.contact_information.email}
              </span>
            </h2>
            <h2 className="flex mt-6">
              <IoLocationOutline className="text-5xl mr-2" />
              <span>
                <span className="font-extrabold">Address : </span>
                {job.contact_information.address}
              </span>
            </h2>
          </div>
          <div className="mb-32">
            <button onClick={handleApplyJob} className="btn btn-primary w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
