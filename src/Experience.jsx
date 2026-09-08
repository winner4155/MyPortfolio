import React from 'react'

function Experience() {
    const experiences = [
        {
            company: 'Nigerian British University',
            role: 'Front Desk Officer / Customer Service Representative / Secretary',
            date: 'September 2025 - Present',
            description: [
                'Serve as the first point of contact for visitors, students, and stakeholders.',
                'Manage daily front desk operations, appointment scheduling, and administrative records.',
                'Respond to inquiries professionally and ensure excellent customer service.',
                'Support communication and coordination across departments.',
            ],
        },
        {
            company: 'Zenith Global Services',
            role: 'Customer Service Representative',
            date: 'August 2022 - December 2023',
            description: [
                'Handled 50+ customer inquiries weekly through phone, email, and in-person communication.',
                'Maintained accurate customer records and documentation to improve information retrieval.',
                'Built positive customer relationships through effective communication and follow-up.',
                'Contributed to customer satisfaction and service quality goals.',
            ],
        },
        {
            company: 'S.D Enterprise',
            role: 'Customer Service Representative / Administrative Officer',
            date: 'January 2023 - January 2024',
            description: [
                'Provided customer support through phone, email, and in-person communication.',
                'Managed office records and administrative documentation.',
                'Coordinated customer requests and prepared routine reports.',
                'Supported daily office operations to improve efficiency.',
            ],
        },
    ]

    return (
        <section
            id="experience"
            className="bg-slate-950 text-white px-6 py-24"
        >
            <div className="max-w-7xl mx-auto">

                <div className="max-w-2xl mb-14">
                    <p className="text-sky-400 font-semibold uppercase tracking-widest text-sm mb-3">
                        My Background
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-black">
                        Professional Experience
                    </h2>

                    <p className="text-slate-400 mt-5 leading-7">
                        My professional background combines customer service,
                        administrative support, communication, problem solving and
                        technology. These experiences have strengthened my ability to
                        understand people, solve problems and work effectively in
                        professional environments.
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <div
                            key={`${experience.company}-${experience.role}`}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-7 md:p-8 hover:border-sky-400/50 transition duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {experience.role}
                                    </h3>

                                    <p className="text-sky-400 font-semibold mt-2">
                                        {experience.company}
                                    </p>
                                </div>

                                <span className="text-sm text-slate-400 bg-slate-800 px-4 py-2 rounded-lg w-fit">
                                    {experience.date}
                                </span>

                            </div>

                            <ul className="space-y-3">
                                {experience.description.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-slate-400 leading-7"
                                    >
                                        <span className="text-sky-400 mt-2">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="font-bold">Customer Service</h4>
                        <p className="text-slate-400 text-sm mt-2">
                            Client support, inquiries and complaint resolution
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="font-bold">Communication</h4>
                        <p className="text-slate-400 text-sm mt-2">
                            Professional communication and relationship building
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="font-bold">Administration</h4>
                        <p className="text-slate-400 text-sm mt-2">
                            Records, scheduling and office coordination
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <h4 className="font-bold">Problem Solving</h4>
                        <p className="text-slate-400 text-sm mt-2">
                            Handling requests and finding practical solutions
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Experience