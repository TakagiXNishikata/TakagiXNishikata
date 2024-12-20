import { useEffect, useState } from "react";
import Navigation from "./navigation";

export default function Summary({ data, onPress }) {
  const [classNameId, setClassNameId] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      setClassNameId(hash);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-aquamarine mt-6 title-page">
        Raffi Ananta
      </h1>
      <h2 className="text-lg md:text-xl mt-0 md:mt-2 text-slate-200 font-semibold">
        Frontend Developer
      </h2>
      <nav className="hidden lg:flex flex-col mt-12 mb-12">
        <ul className="w-max">
          {data?.map((item) => (
            <Navigation
              key={item?.nav_id}
              data={item}
              onPress={onPress}
              spyId={item.href}
              classNameId={classNameId}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
