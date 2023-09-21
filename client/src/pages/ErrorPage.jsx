import { useRouteError } from "react-router-dom";
import codennectLogo from "../assets/logo.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section className="error-page-component" >
              <div className="container">
                  <div>
            <p>Error</p>
            <h1>Ooopsi, something went wrong.</h1>
            <p>The page you are looking for seems to be missing.</p>

            <div>
              <a href="/">
                <button>
                  Take me back
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={codennectLogo} alt="- Imagine some cute Error Image here -"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;