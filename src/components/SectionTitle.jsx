export default function SectionTitle({title}) {
 return (
  <div className="sticky lg:hidden top-0 left-0 z-20 -mx-6 px-6 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
   <h2 className="text-sm font-bold uppercase tracking-widest text-bone-white lg:sr-only">
    {title}
   </h2>
  </div>
 )
}