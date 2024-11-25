function Auth({ setCreatedBy }) {
  const user0 = { id: 0, name: "user0" };
  const user1 = { id: 1, name: "user1" };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" flex justify-center items-center w-[400px] h-[200px] gap-6">
          <button
            onClick={() => {
              setCreatedBy(user0.name);
              localStorage.setItem("createdBy", `${user0.name}`);
            }}
            className="border w-[100px] h-[50px] transition-all duration-300 rounded-xl"
          >
            User0
          </button>
          <button
            onClick={() => {
              setCreatedBy(user1.name);
              localStorage.setItem("createdBy", `${user1.name}`);
            }}
            className="border w-[100px] h-[50px] transition-all duration-300 rounded-lg"
          >
            User1
          </button>
        </div>
      </div>
    </>
  );
}

export default Auth;
