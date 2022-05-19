import React, { useState } from "react";
import ContactForm from "./ContactForm";
import SuccessForm from "./SuccessForm";

export default function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return <div>{!isSubmitted ? <ContactForm submitForm={submitForm} /> : <SuccessForm />}</div>;
}
