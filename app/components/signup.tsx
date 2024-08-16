"use client";

import React from "react";
import Button from "../components/button";
import PasswordIcon from "@/public/assets/svgs/PasswordIcon";
import EmailIcon from "@/public/assets/svgs/EmailIcon";
import { Formik, Form, Field } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// hooks
import useFormValidation from "../hooks/useFormValidation";
import useSupabaseAuth from "../hooks/useSupabaseAuth";

export default function Signup() {
    const { RegisterSchema } = useFormValidation();
    const { signUp } = useSupabaseAuth();
    return (
        <section>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={async (values) => {
                    await signUp(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label
                            htmlFor="email"
                            className="relative flex flex-col text-xs text-dark-grey"
                        >
                            Email address
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className={`mt-1 rounded-lg border py-3 pl-11 pr-4 text-base outline-none ${errors.email && touched.email ? "border-focus-red text-focus-red focus:border-focus-red focus:ring-focus-red" : "focus:border-purple"}`}
                                placeholder="e.g: alex@email.com"
                            />
                            <span className="absolute bottom-[16px] left-5">
                                <EmailIcon />
                            </span>
                            <span className="absolute bottom-[18px] right-5 text-xs text-red-600">
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                            </span>
                        </label>

                        <label
                            htmlFor="password"
                            className="relative flex flex-col pb-6 pt-6 text-xs text-dark-grey"
                        >
                            Create Password
                            <Field
                                type="password"
                                id="createPassword"
                                name="createPassword"
                                className={`mt-1 rounded-lg border py-3 pl-11 pr-4 text-base outline-none ${errors.password && touched.password ? "border-focus-red text-focus-red focus:border-focus-red focus:ring-focus-red" : "focus:border-purple"}`}
                                placeholder="At least 8 characters"
                            />
                            <span className="absolute bottom-[41px] left-5">
                                <PasswordIcon />
                            </span>
                            <span className="absolute bottom-[41px] right-5 text-xs text-red-600">
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                            </span>
                        </label>

                        <label
                            htmlFor="password"
                            className="relative flex flex-col pb-6 text-xs text-dark-grey"
                        >
                            Confirm Password
                            <Field
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className={`mt-1 rounded-lg border py-3 pl-11 pr-4 text-base outline-none ${errors.confirmPassword && touched.confirmPassword ? "border-focus-red text-focus-red focus:border-focus-red focus:ring-focus-red" : "focus:border-purple"}`}
                                placeholder="At least 8 characters"
                            />
                            <span className="absolute bottom-[41px] left-5">
                                <PasswordIcon />
                            </span>
                            <span className="absolute bottom-[41px] right-5 text-xs text-red-600">
                                {errors.confirmPassword &&
                                touched.confirmPassword ? (
                                    <div>{errors.confirmPassword}</div>
                                ) : null}
                            </span>
                        </label>

                        <Button
                            type="submit"
                            className="w-full rounded-lg bg-purple py-3 text-white hover:bg-hover-purple"
                        >
                            Create new account
                        </Button>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </section>
    );
}
