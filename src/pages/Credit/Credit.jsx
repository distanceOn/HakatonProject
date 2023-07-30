import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Credit.module.scss";
import { useState } from "react";

import CreditPassport from "./components/CreditPassport/CreditPassport";
import CreditContacts from "./components/CreditContacts/CreditContacts";
import CreditJob from "./components/CreditJob/CreditJob";
import CreditPersonalInfo from "./components/CreditPersonalInfo/CreditPersonalInfo";

function Credit() {
	const [currentStep, setCurrentStep] = useState("contacts");

	const handleNextStep = () => {
		if (currentStep === "contacts") {
			setCurrentStep("passport");
		} else if (currentStep === "passport") {
			setCurrentStep("job");
		} else if (currentStep === "job") {
			setCurrentStep("personal");
		}
	};

	const handlePreviousStep = () => {
		if (currentStep === "passport") {
			setCurrentStep("contacts");
		} else if (currentStep === "job") {
			setCurrentStep("passport");
		} else if (currentStep === "personal") {
			setCurrentStep("job");
		}
	};

	const [formData, setFormData] = useState({
		city: "",
		lastName: "",
		firstName: "",
		patronymic: "",
		email: "",
		monthlyIncome: "",
		gender: "",
		departmentCode: "",
		passportSeriesAndNumber: "",
		dateOfIssue: "",
		issuedBy: "",
		placeOfBirth: "",
		dateOfBirth: "",
		address: "",
		registrationDate: "",
		isResidentialAddressSame: false,
		additionalField1: "",
		additionalField2: "",
		contactType: "",
		contactPhone: "",
		contactLastName: "",
		contactFirstName: "",
		contactPatronymic: "",
		creditExpenses: "",
		carOwnership: "",
		propertyOwnership: "",
		snils: "",
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		const newValue = type === "checkbox" ? checked : value;
		setFormData((prevData) => ({
			...prevData,
			[name]: newValue,
		}));
	};

	const handleSubmitContacts = () => {
		// Add code here to handle form submission for "contacts" step
		console.log("Contacts form data:", formData);
		handleNextStep();
	};

	const handleSubmitPassport = () => {
		// Add code here to handle form submission for "passport" step
		console.log("Passport form data:", formData);
		handleNextStep();

		// You may also perform any other actions here, such as submitting the data to the server
		// After successful submission, you can navigate to the desired page
	};

	const handleSubmitJob = () => {
		// Add code here to handle form submission for "passport" step
		console.log("Job form data:", formData);
		handleNextStep();

		// You may also perform any other actions here, such as submitting the data to the server
		// After successful submission, you can navigate to the desired page
	};

	const handleSubmitPersonal = () => {
		// Add code here to handle form submission for "passport" step
		console.log("Personal form data:", formData);
		handleNextStep();

		// You may also perform any other actions here, such as submitting the data to the server
		// After successful submission, you can navigate to the desired page
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (currentStep === "contacts") {
			handleSubmitContacts();
		} else if (currentStep === "passport") {
			handleSubmitPassport();
		} else if (currentStep === "job") {
			handleSubmitJob();
		} else if (currentStep === "personal") {
			handleSubmitPersonal();
		}
	};

	return (
		<div className={s.credit}>
			<ResponsiveAppBar />
			<form className={s.form} onSubmit={handleSubmit}>
				{currentStep === "contacts" && (
					<CreditContacts
						formData={formData}
						handleChange={handleChange}
						handlePreviousStep={handlePreviousStep}
					/>
				)}
				{currentStep === "passport" && (
					<CreditPassport
						formData={formData}
						handleChange={handleChange}
						handlePreviousStep={handlePreviousStep}
					/>
				)}
				{currentStep === "job" && (
					<CreditJob
						formData={formData}
						handleChange={handleChange}
						handlePreviousStep={handlePreviousStep}
					/>
				)}
				{currentStep === "personal" && (
					<CreditPersonalInfo
						formData={formData}
						handleChange={handleChange}
						handlePreviousStep={handlePreviousStep}
					/>
				)}
			</form>
		</div>
	);
}

export default Credit;
