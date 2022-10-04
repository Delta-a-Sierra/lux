import React from "react";
import NameAndStatus from "./nameAndStatus";

const ChatAside = () => {
  return (
    <div className="bg-gray-100 rounded-md pb-4 shadow-md">
      <div className="bg-primary rounded-t-md p-1  border-b-4 border-secondary mb-4">
        <h2 className="text-white text-lg font-bold text-center">Chat</h2>
      </div>
      <div className="w-full px-4 mt-1 flex flex-col gap-4">
        <NameAndStatus name="John Doe" status="online" />
        <NameAndStatus name="Amber Herd" status="busy" />
        <NameAndStatus
          name="His Excellency, President for Life, Field Marshal Al Hadji Doctor Idi Amin Dada, VC, DSO, MC, Lord of All the Beasts of the Earth and Fishes of the Seas and Conqueror of the British Empire in Africa in General and Uganda in Particular"
          status="away"
        />
        <NameAndStatus name="Tupac Shakur" status="offline" />
      </div>
    </div>
  );
};

export default ChatAside;
