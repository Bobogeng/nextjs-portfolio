import React from "react";
import UseForm from "./UseForm";

export default function ContactForm({ submitForm }) {
    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm);

    return (
        <form onSubmit={handleSubmit} noValidate>
            <p className="pb-5">{`//`} Leave what you want to ask below</p>
            <input type="hidden" name="_subject" value={"Email Baru Bro!"} />
            <label htmlFor="username" className="block pb-3">
                <span className="block text-yellow-400 font-bold text-xl pb-1">Name</span>
                <input className="block w-full px-3 py-2 border-2 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 dark:focus:border-yellow-400 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 dark:invalid:focus:border-pink-700 rounded-md" type="text" name="username" id="username" placeholder="Enter your name" value={values.username} onChange={handleChange} />
                {errors.username && <p className="font-bold text-sm m-1 text-pink-700">{errors.username}</p>}
            </label>
            <label htmlFor="email" className="block pb-3">
                <span className="block text-yellow-400 font-bold text-xl pb-1">Email</span>
                <input className="block w-full px-3 py-2 border-2 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 dark:focus:border-yellow-400 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 dark:invalid:focus:border-pink-700 rounded-md" type="email" name="email" id="email" placeholder="Enter your email" value={values.email} onChange={handleChange} />
                {errors.email && <p className="font-bold text-sm m-1 text-pink-700">{errors.email}</p>}
            </label>
            <label htmlFor="messages" className="block pb-3">
                <span className="block text-yellow-400 font-bold text-xl pb-1">Messages</span>
                <textarea className="block w-full px-3 py-2 border-2 bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 dark:focus:border-yellow-400 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 dark:invalid:focus:border-pink-700 rounded-md" name="messages" id="messages" rows={5} maxLength={1000} placeholder="Enter your messages" value={values.messages} onChange={handleChange}></textarea>
                {errors.messages && <p className="font-bold text-sm m-1 text-pink-700">{errors.messages}</p>}
            </label>
            <input name="_formsubmit_id" type="text" className="hidden" />
            <button className="block w-full bg-yellow-400 text-white font-bold py-3 px-5 rounded-md hover:bg-yellow-500 active:bg-yellow-600 transition duration-100 focus:ring ring-yellow-600 text-2xl" type="submit">
                Submit
            </button>
        </form>
    );
}
