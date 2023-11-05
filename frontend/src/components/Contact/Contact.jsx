/*import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { useForm } from 'react-hook-form';
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
  } = useForm();

  const onSubmit = async (data) => {
    // Nettoyez les valeurs des champs de texte avec sanitize-html
    const cleanedData = {
      email: sanitizeHtml(data.email),
      messageTitle: sanitizeHtml(data.messageTitle),
      message: sanitizeHtml(data.message),
    };

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });

      if (response.ok) {
        console.log('Email envoyé avec succès!');
      } else {
        console.error('Erreur lors de l\'envoi de l\'e-mail');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };

  return (
    <>
      <h2 className='title'>{text['title']}</h2>
      <section className='contact' id='contact'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__group'>
            <label className='form__group--title'>{text['email']}</label>
            <input
              className='form__group--content'
              type='email'
              name='email'
              {...register('mail', {
                required: 'Valide Email Address is required',
                pattern: /^\S+@\S+$/i,
              })}
              aria-invalid={errors.mail ? 'true' : 'false'}
            />
            {errors.mail && <p role='alert'>{errors.mail.message}</p>}
          </div>

          <div className='form__group'>
            <label className='form__group--title'>{text['messageTitle']}</label>
            <input
              className='form__group--content'
              type='text'
              name='messageTitle'
              {...register('messageTitle', { required: true })}
              aria-invalid={errors.title ? 'true' : 'false'}
            />
            {errors.title?.type === 'required' && <p role='alert'>Title is required</p>}
          </div>

          <div className='form__group'>
            <label className='form__group--title'>{text['message']}</label>
            <textarea
              className='form__group--content form__group--message'
              type='textarea'
              name='message'
              {...register('message', { required: true })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.title?.type === 'required' && <p role='alert'>Message is required</p>}
          </div>

          <input className='form__button' type='submit' value='Envoyer mon message' />
        </form>
      </section>
    </>
  );
}*/

/*import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
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
  } = useForm();

  const onSubmit = (data) => {
    // Utilisez votre Service ID, Template ID et User ID d'EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <>
      <h2 className='title'>{text['title']}</h2>
      <section className='contact' id='contact'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__group'>
            <label className='form__group--title'>{text['email']}</label>
            <input
              className='form__group--content'
              type='email'
              name='email'
              {...register('mail', {
                required: 'Valide Email Address is required',
                pattern: /^\S+@\S+$/i,
              })}
              aria-invalid={errors.mail ? 'true' : 'false'}
            />
            {errors.mail && <p role='alert'>{errors.mail.message}</p>}
          </div>

          <div className='form__group'>
            <label className='form__group--title'>{text['messageTitle']}</label>
            <input
              className='form__group--content'
              type='text'
              name='messageTitle'
              {...register('messageTitle', { required: true })}
              aria-invalid={errors.title ? 'true' : 'false'}
            />
            {errors.title?.type === 'required' && <p role='alert'>Title is required</p>}
          </div>

          <div className='form__group'>
            <label className='form__group--title'>{text['message']}</label>
            <textarea
              className='form__group--content form__group--message'
              type='textarea'
              name='message'
              {...register('message', { required: true })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.title?.type === 'required' && <p role='alert'>Message is required</p>}
          </div>

          <input className='form__button' type='submit' value='Envoyer mon message' />
        </form>
      </section>
    </>
  );
}
*/

import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
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
  } = useForm();

  const onSubmit = (data) => {
    // Utilisez votre Service ID, Template ID et User ID d'EmailJS
    emailjs.sendForm('service_9k4f79r', 'template_vrznp4e', data, '9HiRN5S_tzJqbsuzd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <>
      <p className="anchor-offset" id='anchor4'></p>
      <h2 className='title'>{text['title']}</h2>
      <section className='contact' id='contact'>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__group'>
            <label className='form__group--title'>{text['email']}</label>
            <input
              className='form__group--content'
              type='email'
              name='email'
              {...register('mail', {
                required: 'Valide Email Address is required',
                pattern: /^\S+@\S+$/i,
              })}
              aria-invalid={errors.mail ? 'true' : 'false'}
            />
            {errors.mail && <p role='alert'>{errors.mail.message}</p>}
          </div>

          <div className='form__group'>
            <label className='form__group--title'>{text['messageTitle']}</label>
            <input
              className='form__group--content'
              type='text'
              name='messageTitle'
              {...register('messageTitle', { required: true })}
              aria-invalid={errors.title ? 'true' : 'false'}
            />
            {errors.title?.type === 'required' && <p role='alert'>Title is required</p>}
          </div>

          <div className='form__group'>
            <label className='form__group--title'>{text['message']}</label>
            <textarea
              className='form__group--content form__group--message'
              type='textarea'
              name='message'
              {...register('message', { required: true })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.title?.type === 'required' && <p role='alert'>Message is required</p>}
          </div>

          <input className='form__button' type='submit' value='Envoyer mon message' />
        </form>
      </section>
    </>
  );
}
