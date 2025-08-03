import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Oops! An Error Occured 😞</h1>
      {error && <p>{error.data} </p>}
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </>
  );
}

export default ErrorPage;
