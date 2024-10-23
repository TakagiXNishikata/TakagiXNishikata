export default function Navigation({ data, onPress, spyId, classNameId }) {
    const classActive = spyId === classNameId ? "active" : "";
    
    return (
        <li data-to-scrollspy-id={data?.scrollspy_id}>
            <a 
                onClick={(e) => onPress(e)}
                href={data?.href}
                className={`group flex items-center py-3 ${classActive}`}
            >   
                <span className="nav-indicator mr-4 h-px w-8 bg-shadow-gray transition-all group-hover:w-16 group-hover:bg-bone-white group-focus-visible::w-16 group-focus-visible:bg-bone-white motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-shadow-gray group-hover:text-bone-white group-focus-visible:text-bone-white">
                {data?.link_text}
                </span>
            </a>
        </li>
    )
}
