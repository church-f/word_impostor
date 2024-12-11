import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PositionedMenu from "../Menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useTranslation } from "react-i18next";
import TextArea from '../TextArea';
import { Typography } from '@mui/material';

export default function ContactUs() {
  const { t } = useTranslation()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rkmrd78', 'template_p0qflbg', form.current, {
        publicKey: '6_qLXlRlGGD-dmmPl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div>
        <PositionedMenu />
      </div>
      <div style={{ padding: '20px' }}>
        <Typography variant="h4">{t("Contattaci")}</Typography>
        <Typography style={{ marginTop: "20px" }}>
          {t("Contattaci testo")}
          <a href="mailto:wordimpostor@gmail.com"> wordimpostor@gmail.com</a>
        </Typography>

        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '40px' }} >
          <TextField id="standard-basic" label={t('Nome')} variant="outlined" name="user_name" />
          <TextField id="standard-basic" label={t('Email')} variant="outlined" name="user_email" />
          <TextArea minRows={3} placeholder={t('Messaggio')} name="message" style={{width: '100%'}}/>
          <Button type='submit' variant='contained'>
            {t('Invia')}
          </Button>
        </form>
      </div>
    </>
  );
};