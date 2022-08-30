import React from "react";

const App = ({ item }) => {
  return (
    <div className="w-full   overflow-hidden mb-12">
      <p className="w-full text-xl mb-4 font-semibold text-purple-600">
        {item.title}
      </p>
      <div className="flex overflow-x-scroll px-4 space-x-4 lg:space-x-8 w-full justify-start lg:justify-center">
        {item.images?.map((item, i) => (
          <img src={item} key={i} className="w-60 mr-4"></img>
        ))}
      </div>
      <p className="font-semibold text-lg pt-4">Description</p>
      <p className="font-light ">{item.description}</p>
    </div>
  );
};

export default App;
