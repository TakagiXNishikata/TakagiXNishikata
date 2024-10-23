import { useRouteError, useNavigate } from "react-router-dom";
import LinkArrow from "./LinkArrow";

export default function ErrorPag() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="text-center"> 
          <h1 className="text-xl">404 {error.statusText || error.message}</h1>
        </div>
        <div className="group">
          <button
            className="mt-3 flex group-hover:text-aquamarine cursor-pointer text-bone-white font-semibold"
            type="button"
            onClick={ () => navigate("/")}
          >
            Back to Home
            <LinkArrow/>
          </button>
        </div>
      </div>
    </>
  )
}