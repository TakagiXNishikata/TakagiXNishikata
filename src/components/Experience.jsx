import LinkArrow from "./LinkArrow"
export default function Experience ({ data }) {
    return (
        <li className='mb-10'>
            <a 
            href={data?.employer_link}
            target='_blank'
            className='group grid grid-cols-10 relative cursor-pointer transition-all'
            >
                <div className='hidden md:block absolute transition rounded-md -inset-x-4 -right-4 -inset-y-4 z-0 group-hover:bg-bone-white/5 group-hover:drop-shadow-sm group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]'/>
                <header className='col-span-3 z-10 text-xs mt-[5px] group-hover:text-bone-white text-shadow-gray font-semibold'>
                {data?.job_start} &mdash; {data?.job_end}
                </header>
                <div className='col-span-7 z-10'>
                    <h3 className='text-balance text-base font-bold group-hover:text-aquamarine'>
                        {data?.job_title}{" "}
                        <span className='text-shadow-gray group-hover:text-aquamarine'>at</span>{" "}
                        {data?.employer_name}
                        <LinkArrow/>
                    </h3>
                    <p className='mt-2 text-sm group-hover:text-white text-shadow-gray text-balance font-medium'>
                    {data?.job_description?.summary}
                    </p>
                    <ul className='flex flex-wrap gap-1 mt-3'>
                        {data?.job_skills.map((skills) => (
                        <li
                            key={skills} 
                            className='inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-aquamarine/10 text-aquamarine'>
                            {skills}
                        </li>
                        ))}
                    </ul>
                </div>
            </a>
        </li>
    )
}