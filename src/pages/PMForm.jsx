import React, { useState } from 'react'
import SliderNav from '../components/SliderNav'
import bannerimg from "../assets/bannerimg.png";

const PMForm = () => {
    // State for project details
    const [projectTitle, setProjectTitle] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');
    const [deadline, setDeadline] = useState('');
    const [files, setFiles] = useState([]);

    // State for milestones
    const [milestones, setMilestones] = useState([
        { title: 'Wireframes & UI Screens', payment: '25000', dueDate: '' }
    ]);

    // Handle adding a new milestone
    const addMilestone = () => {
        setMilestones([...milestones, { title: '', payment: '', dueDate: '' }]);
    };

    // Handle updating a milestone
    const updateMilestone = (index, field, value) => {
        const updatedMilestones = [...milestones];
        updatedMilestones[index][field] = value;
        setMilestones(updatedMilestones);
    };

    // Handle adding a new skill
    const addSkill = () => {
        if (newSkill.trim() && skills.length < 5) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    // Handle removing a skill
    const removeSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        const uploadedFiles = Array.from(e.target.files);
        setFiles([...files, ...uploadedFiles]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log({
            projectTitle,
            category,
            subcategory,
            skills,
            description,
            budget,
            deadline,
            files,
            milestones
        });
        alert('Form submitted successfully!');
    };
    return (
        <div>
            <SliderNav />

            <div className="pmcontainer bg-[#14A800] rounded-lg px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden shadow-lg">
                {/* Left side text */}
                <div className="text-white pr-4 md:w-1/2">
                    <h2 className="text-3xl text-start font-semibold mb-2">Project Management</h2>
                    <p className="text-base text-start">
                        Choose a freelancer's personal and instantly generate work in their distinct style.
                    </p>
                </div>

                {/* Right side image */}
                <div className="flex-shrink-0">
                    <img
                        src={bannerimg}
                        alt="Project flow illustration"
                        className="w-96 h-auto"
                    />
                </div>
            </div>

            <div className="form my-4">
                <form className="border border-gray-300 rounded-lg shadow-lg p-4 sm:p-8 w-full">
                    {/* Project Title */}
                    <div className="mb-6 flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
                        <div className='text-start lg:w-1/4'>
                            <label className="block text-gray-700 font-medium mb-1">
                                Project Title
                            </label>
                            <p className='text-sm'>A clear and concise name for your project that summarizes the task. Example: "E-commerce Website Redesign"</p>
                        </div>
                        <div className='lg:w-3/4'>
                            <input
                                type="text"
                                placeholder="E-commerce Website Redesign"
                                className="w-full border border-gray-300 rounded px-3 py-3 placeholder:text-[14px] text-sm"
                                maxLength={80}
                            />
                            <div className="text-right text-gray-600 text-xs mt-1">0 / 80 max</div>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="mb-6 flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
                        <div className='text-start lg:w-1/4'>
                            <label className="block text-gray-700 font-medium mb-1">
                                Category
                            </label>
                            <p className='text-sm'>Select the most relevant category that matches your project domain, such as Web Development, Graphic Design, or Marketing.</p>
                        </div>
                        <div className='lg:w-3/4 flex gap-2 sm:gap-4'>
                            <div className="w-1/2">

                                <select className="w-full border text-gray-500 text-sm border-gray-300 rounded px-3 py-3 bg-white focus:outline-none">
                                    <option>Select A Category</option>
                                    <option>Select A Category</option>
                                    <option>Select A Category</option>
                                </select>
                            </div>
                            <div className="w-1/2 flex items-end">
                                <select className="w-full border text-gray-500 text-sm border-gray-300 rounded px-3 py-3 bg-white focus:outline-none">
                                    <option>Select A Subcategory</option>
                                    <option>Select A Subcategory</option>
                                    <option>Select A Subcategory</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Required Skills */}
                    <div className="mb-6 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                        <div className='text-start lg:w-1/4'>
                            <label className="block text-gray-700 font-medium mb-1">
                                Required Skills
                            </label>
                            <p className='text-sm'>Choose the specific technical or creative skills needed to complete the project (e.g., React.js, UI/UX Design, Figma). Helps match with qualified freelancers.</p>
                        </div>
                        <div className='lg:w-3/4'>
                            <input
                                type="text"
                                placeholder="e.g. React.js, UI/UX Design, Figma"
                                className="w-full border border-gray-300 rounded px-3 py-4 placeholder:text-[14px] text-sm"
                            />
                            <div className="text-start text-gray-600 text-xs mt-1">
                                5 Skills minimum. Use letters and numbers only.
                            </div>
                        </div>
                    </div>

                    {/* Project Description */}
                    <div className="mb-6 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                        <div className='text-start lg:w-1/4'>
                            <label className="block text-gray-700 font-medium mb-1">
                                Project Description
                            </label>
                            <p className='text-sm'>Provide a detailed explanation of the project, including goals, features, expectations, and any technical specifications. More detail improves quality of proposals.</p>
                        </div>
                        <div className='lg:w-3/4'>
                            <textarea
                                placeholder="More detail improves quality of proposals."
                                className="w-full border border-gray-300 rounded px-3 py-2 placeholder:text-[14px] text-sm"
                                maxLength={250}
                                rows={4}
                            ></textarea>
                            <div className="text-right text-gray-600 text-xs mt-1">0 / 250 max</div>
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="mb-6 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                        <div className='text-start lg:w-1/4'>
                            <label className="block text-gray-700 font-medium mb-1">
                                Budget
                            </label>
                            <p className='text-sm'>Enter your total budget or price range (e.g., PKR 50,000 – 80,000). This helps freelancers assess if the project aligns with their rates.</p>
                        </div>
                        <div className='lg:w-3/4'>
                            <input
                                type="text"
                                placeholder="e.g. PKR 50,000 – 80,000"
                                className="w-full border border-gray-300 rounded px-3 py-3 placeholder:text-[14px] text-sm"
                            />
                            <div className="text-start text-gray-600 text-xs mt-1">
                                Enter your total budget or price range (e.g. PKR 50,000 – 80,000). This helps freelancers assess if the project aligns with their rates.
                            </div>
                        </div>
                    </div>

                    {/* Timeline / Deadline */}
                    <div className="mb-6 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                        <div className='text-start lg:w-1/4'>
                            <label className="block text-gray-700 font-medium mb-1">
                                Timeline / Deadline
                            </label>
                            <p className='text-sm'>Select the expected delivery date or project deadline. Helps freelancers determine feasibility based on their availability.</p>
                        </div>
                        <div className='lg:w-3/4'>
                            <input
                                type="text"
                                placeholder="MM/DD/YYYY"
                                className="w-full border border-gray-300 rounded px-3 py-3 placeholder:text-[14px] text-sm"
                            />
                            <div className="text-start text-gray-600 text-xs mt-1">
                                Select the expected delivery date or project deadline. Helps freelancers determine feasibility based on their availability.
                            </div>
                        </div>
                    </div>

                    {/* Files */}
                    <div className="mb-6 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                        <div className='text-start lg:w-1/4'>
                            <label className="block text-gray-700 font-medium mb-1">
                                Files
                            </label>
                            <p className='text-sm'>Attach any design briefs, sketches, assets, or documentation related to this milestone. Freelancers can also use this to upload deliverables for review.</p>
                        </div>
                        <div className='lg:w-3/4'>
                            <div className="border-2 border-dashed border-gray-300 rounded flex items-center justify-center h-24 bg-gray-50 text-gray-400 text-sm">
                                Drop Files Here
                            </div>
                        </div>
                    </div>

                    {/* Milestone Section */}
                    <div className="border-t border-gray-200 p-4 rounded-lg mb-4 bg-[#f6f6f6]">
                        <label className="text-start block text-gray-700 font-medium mb-1">
                            Milestone Title
                        </label>
                        <input
                            type="text"
                            placeholder="Wireframes & UI Screens"
                            className="w-full border border-gray-300 rounded px-3 py-3 placeholder:text-[14px] text-sm"
                        />
                        <p className='text-sm text-start text-gray-600'>Give a clear and concise title to this phase of the project.</p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <div className="sm:w-1/2">
                                <label className="text-start block text-gray-700 font-medium mb-1">
                                    Payment Amount
                                </label>
                                <input
                                    type="text"
                                    placeholder="PKR 25,000"
                                    className="w-full border border-gray-300 rounded px-3 py-3 placeholder:text-[14px] text-sm"
                                />
                                <div className="text-start text-gray-600 text-xs mt-1">
                                    Specify how much you will pay for completing this milestone. This amount will be held in escrow (if applicable).
                                </div>
                            </div>
                            <div className="sm:w-1/2">
                                <label className="text-start font-medium block text-gray-700 mb-1">
                                    Due Date
                                </label>
                                <input
                                    type="text"
                                    placeholder="MM/DD/YYYY"
                                    className="w-full border border-gray-300 rounded px-3 py-3 placeholder:text-[14px] text-sm"
                                />
                                <div className="text-start text-gray-600 text-xs mt-1">
                                    Select the date by which this milestone should be completed. Make sure it aligns with your overall project timeline.
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button
                                type="button"
                                className="mt-6 px-8 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition text-sm"
                            >
                                Add New
                            </button>
                        </div>
                    </div>

                    {/* Continue Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition text-lg"
                    >
                        Continue
                    </button>
                </form>
            </div >
        </div >
    )
}

export default PMForm