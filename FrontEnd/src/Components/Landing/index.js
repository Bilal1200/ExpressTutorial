import React, { useState, useEffect } from "react";

export default function Index() {
  const [data, setData] = useState([]);
  const [Name, setName] = useState("");
  const [Number, setLuckyNum] = useState(0);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetch(`http://localhost:4000/todos`);
      result.json().then((json) => {
        setData(json);
        console.log(data, "ddsash");
      });
    };
    fetchdata();
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    let data = { Name, Number };
    const res = await fetch("http://localhost:4000/todos/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        lucky_number: Number,
      }),
    }).then((resp) => {
      console.warn("resp", resp);
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  };
  const handelchange = (e) => {
    setName(e.target.value);
  };
  const handelchange2 = (e) => {
    setLuckyNum(e.target.value);
  };

  return (
    <>
      {/* <div className="flex justify-center mt-20">
        {data.map((item, index) => (
          <div className="mx-16" key={index}>
            <h1>{item?.name}</h1>
            <p>{item?.lucky_number}</p>
          </div>
        ))}
      </div>

      <div>
        <form   onSubmit={handelSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={Name}
          className="border"
          onChange={handelchange}
        ></input>
        <label>Email</label>
        <input
          className="border"
          onChange={handelchange2}
          name="lucky_number"
          value={Number}
        ></input>
        <button type="submit">
          Submit
        </button>
        </form>
      </div> */}

      <div className="flex items-center justify-center h-screen bg-black">
        <div className="relative flex flex-col items-center justify-center w-full max-w-md rounded-lg">
          <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
          <div className="z-10 w-full h-full p-10 bg-black rounded-xl">
            <h5 className="text-3xl">Register</h5>
            <form
              className="w-full space-y-6"
              onSubmit={handelSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                   id="name"
                  type="text"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none roundedn-md focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                   id="email"
                  type="email"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none roundedn-md focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-200"
                >
                  Password
                </label>
                <input
                   id="password"
                  type="password"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none roundedn-md focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                />
              </div>
              <button size="large" className="text-white bg-blue-900">SUbmit</button>
            </form>
           </div>
        </div>
      </div>
    </>
  );
}
