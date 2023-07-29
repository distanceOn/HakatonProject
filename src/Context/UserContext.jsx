import React, { useState, useContext } from "react";

const PhoneNumberContext = React.createContext();

const PhoneNumberProvider = ({ children }) => {
	const [phoneNumber, setPhoneNumber] = useState("");

	// Function to update the phone number
	const updatePhoneNumber = (newPhoneNumber) => {
		setPhoneNumber(newPhoneNumber);
	};

	return (
		<PhoneNumberContext.Provider value={{ phoneNumber, updatePhoneNumber }}>
			{children}
		</PhoneNumberContext.Provider>
	);
};

// Custom hook to access the PhoneNumberContext
const usePhoneNumberContext = () => {
	return useContext(PhoneNumberContext);
};

export { PhoneNumberProvider, usePhoneNumberContext };
