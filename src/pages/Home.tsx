import {useNavigate} from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>Home page</div>
      <button onClick={() => navigate('/dictionaries')}>
        Dictionary
      </button>
    </>
  )
}