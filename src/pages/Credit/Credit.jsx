import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import s from "./Credit.module.scss";
import { useState } from "react";

import CreditPassport from "./components/CreditPassport/CreditPassport";
import CreditContacts from "./components/CreditContacts/CreditContacts";
import CreditJob from "./components/CreditJob/CreditJob";
import CreditPersonalInfo from "./components/CreditPersonalInfo/CreditPersonalInfo";
import CreditEduForm from "./components/CreditEduForm/CreditEduForm";

function Credit() {
	const [currentStep, setCurrentStep] = useState("contacts");

	const handleNextStep = () => {
		if (currentStep === "contacts") {
			setCurrentStep("passport");
		} else if (currentStep === "passport") {
			setCurrentStep("job");
		} else if (currentStep === "job") {
			setCurrentStep("personal");
		} else if (currentStep === "personal") {
			setCurrentStep("eduForm");
		} else if (currentStep === "eduForm") {
			alert("Данные отправлены!");
		}
	};

	const handlePreviousStep = () => {
		if (currentStep === "passport") {
			setCurrentStep("contacts");
		} else if (currentStep === "job") {
			setCurrentStep("passport");
		} else if (currentStep === "personal") {
			setCurrentStep("job");
		} else if (currentStep === "eduForm") {
			setCurrentStep("personal");
		}
	};

	const [formData, setFormData] = useState({
		city: "Краснодар",
		lastName: "Иванов",
		firstName: "Иван",
		patronymic: "Иванович",
		email: "ivanov@mail.ru",
		monthlyIncome: "30000",
		gender: "Мужчина",
		departmentCode: "155-231",
		passportSeriesAndNumber: "1234 567890",
		dateOfIssue: "01.01.2010",
		issuedBy: "Отделением УФМС России по Краснодарскому краю",
		placeOfBirth: "Краснодар",
		dateOfBirth: "01.01.1990",
		address: "ул. Ленина, д. 10, кв. 5",
		registrationDate: "01.01.2015",
		isResidentialAddressSame: false,
		additionalField1: "Дополнительное поле 1",
		additionalField2: "Дополнительное поле 2",

		contactPhone: "+7 (999) 123-45-67",
		contactLastName: "Петров",
		contactFirstName: "Петр",
		contactPatronymic: "Петрович",
		creditExpenses: "10000",

		snils: "123-456-789 00",
		startDate: "01.01.2015",
		position: "Менеджер",
		organizationName: "ООО Рога и Копыта",
		workPhone: "+7 (999) 123-45-67",
		employeeCount: "50-100",
		organizationType: "type1",
		activityArea: "area2",
		organizationINN: "1234567890",
		organizationAddress: "ул. Ленина, д. 20",
		employmentType: "employee",
		totalWorkExperience: "lessThan1Year",
		education: "bachelor",
		maritalStatus: "single",
		children: "none",
		contactType: "friend",
		carOwnership: "yes",
		propertyOwnership: "no",
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
				{currentStep === "eduForm" && (
					<CreditEduForm handlePreviousStep={handlePreviousStep} />
				)}
			</form>
		</div>
	);
}

export default Credit;
