import axios from "axios";
import { useState, useEffect } from "react";

export default function UseForm(callback) {
    const [publish, setPublish] = useState(false);
    const [values, setValues] = useState({
        username: "",
        email: "",
        messages: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        messages: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const Validate = (values) => {
        let errors = {};

        if (!values.username.trim()) {
            errors.username = "* Name is required";
            setPublish(false);
        }

        if (!values.email) {
            errors.email = "* Email required";
            setPublish(false);
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "* Email address is missing an '@' or '.com'";
            setPublish(false);
        }

        if (!values.messages) {
            errors.messages = "* Messages is required";
            setPublish(false);
        }

        if (values.username && values.email && /\S+@\S+\.\S+/.test(values.email) && values.messages) {
            setPublish(true);
            axios.defaults.headers.post["Content-Type"] = "application/json";
            axios.post("https://formsubmit.co/ajax/suirito@gmail.com", {
                username: values.username,
                email: values.email,
                messages: values.messages,
            });
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(Validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    });

    return { handleChange, values, handleSubmit, errors, isSubmitting };
}
