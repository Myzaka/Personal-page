import React from 'react';
import { useForm } from "react-hook-form"
import './Contact_style.scss';
import texts from './Contact_text.json';
import { useLang } from '../Generic/Language_context';

export default function Contact() {
    const { language } = useLang();
    const text = texts[language];
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <section className='contact' id='contact'>
            <h2>{text['title']}</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <div className='form__group'>
                    <label className='form__group--title'>
                        {text['email']}
                    </label>
                    <input
                        className='form__group--content'
                        type="email"
                        name="email"
                        {...register("mail", { required: "Valide Email Address is required", pattern: /^\S+@\S+$/i })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />    
                    {errors.mail && <p role="alert">{errors.mail.message}</p>}
                </div>

                <div className='form__group'>
                    <label className='form__group--title'>
                        {text['messageTitle']}
                    </label>
                    <input className='form__group--content'
                        type="text"
                        name="messageTitle"
                        {...register("messageTitle", { required: true })}
                        aria-invalid={errors.title ? "true" : "false"}
                    />
                    {errors.title?.type === "required" && (
                        <p role="alert">Title is required</p>
                    )}
                </div>

                <div className='form__group'>
                    <label className='form__group--title'>
                        {text['message']}
                    </label>
                    <textarea
                        className='form__group--content form__group--message'
                        type="textarea"
                        name="message"
                        {...register("message", { required: true })}
                        aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.title?.type === "required" && (
                        <p role="alert">Message is required</p>
                    )}
                </div>

            <input className="form__button" type="submit" value="Envoyer mon message"/>
            </form>
        </section>
    )
}