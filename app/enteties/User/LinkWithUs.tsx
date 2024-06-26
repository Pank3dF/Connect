"use client"
import React from 'react'
import { Formik, Field, Form, FieldProps, FormikHelpers } from 'formik';
import { z } from "zod";
import validator from "validator";
import { toFormikValidationSchema } from 'zod-formik-adapter';
import axios from 'axios';
import style from './LinkWithUs.module.scss'
import InputMask from 'react-input-mask';

interface LinkWithUsProps {
    h3: string,
}

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

interface submitProps {
    name: string,
    phone: string,
    comment: string
}
const LinkWithUsSchema = z.object({
    name: z.string({
        required_error: "Имя обязательно"
    }).min(2, { message: "Минимум 2 буквы" }).refine((val) => {
        const words = val.trim().split(/\s+/);
        return words.every(word => /^[а-яА-Яa-zA-Z]+$/.test(word));
    }, { message: "Только буквы" }),
    phone: z.string({ required_error: "Телефон обязателен" }).refine((val) => {
        return phoneRegExp.test(val);
    }, { message: "Неверный формат" }),
    comment: z.string().optional(),
})

const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID


const LinkWithUs = ({ h3 }: LinkWithUsProps) => {
    const onSubmit = async (value: submitProps, resetForm: () => void) => {
        try {
            const response = await axios.post('http://localhost:3001/sendMessage', {
                chat_id: 1621380405,
                text: ` Заявка с сайта\nИмя: ${value.name}\nТелефон: ${value.phone}\nКомментарий: ${value.comment}`,
            });
            resetForm()
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    return (
        <div className={style.formWrapper}>
            <h3 className={style.formTitle}>{h3}</h3>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    comment: '',
                }}
                validationSchema={toFormikValidationSchema(LinkWithUsSchema)}
                onSubmit={(value, { resetForm }) => onSubmit(value, resetForm)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={style.form}>
                            <div className={style.formInputsUp}>
                                <div className={style.formInputWithError}>
                                    <Field className={!errors.name ? style.input : style.borderRed} name="name" placeholder="Имя" />
                                    {errors.name && touched.name ? (
                                        <div className={style.error}>{errors.name}</div>
                                    ) : null}
                                </div>
                                <div  className={style.formInputWithError}>
                                    <Field name="phone">
                                        {({ field }: any) => (
                                            <InputMask
                                                {...field}
                                                className={!errors.name ? style.input : style.borderRed}
                                                mask="+7 (999) 999-99-99"
                                                placeholder="Номер Телефона"
                                                id="phone"
                                                name="phone"
                                                type="text"
                                            />
                                        )}
                                    </Field>
                                    {errors.phone && touched.phone ? (
                                        <div className={style.error}>{errors.phone}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div  className={style.formInputWithError}>
                                <Field className={style.comment}
                                    name="comment"
                                    placeholder="Комментарий"
                                    type="text"
                                />
                            
                            </div>
                        </div>
                        <p className={style.dataSubmitDocument}>Нажимая на кнопку вы соглашаетесь с условиями <span className={style.dataSubmitDocumentLink}>политики обработки персональных данных</span></p>
                        <button className={style.buttonSubmitDocument} type="submit">Позвонить</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LinkWithUs
