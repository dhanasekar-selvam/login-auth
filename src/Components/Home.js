import { useLocation } from "react-router-dom";
// import Axios from "axios";
// import { toast } from "react-toastify";

// const Home = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   //   if (!location.state.datas.email) {
//   //     toast.error("Please Login to continue");
//   //     navigate("/");
//   //   }

//   //   const editClick = () => {
//   //     navigate("/", { state: { datas: location.state.datas } });
//   //   };
//   //   const editData = () => {
//   //     if (location.state.datas._id) {
//   //       const data = { id: location.state.datas._id };

//   //       Axios.PUT("http://localhost:5000/user/edit", data).then((res) => {
//   //         console.log(res.data.message);
//   //         if (res.data.message) {
//   //           toast(`🦄 ${res.data.message}!`, {
//   //             position: "top-right",
//   //             autoClose: 5000,
//   //             hideProgressBar: false,
//   //             closeOnClick: true,
//   //             pauseOnHover: true,
//   //             draggable: true,
//   //             progress: undefined,
//   //           });
//   //         } else {
//   //           console.log(res.data);

//   //         }
//   //       });
//   //     }
//   //   };
//   return <>
//   {location.state.datas}
//   <button onClick={() => navigate("/",{stat})}>Home</button>
//   </>;
// };

// export default Home;

const Home = () => {
  const location = useLocation();

  return (
    <div>
      {location.state.datas.name}
      <br />
      {location.state.datas.email}
    </div>
  );
};

export default Home;
