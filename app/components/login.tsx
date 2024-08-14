"use client";

import EmailIcon from "@/public/assets/svgs/EmailIcon";
import Auth from "./auth";
import Button from "./button";
import PasswordIcon from "@/public/assets/svgs/PasswordIcon";
import { Formik, Form, Field } from "formik";
import useFormValidation from "../hooks/useFormValidation";

export default function Login() {
    const { LoginSchema } = useFormValidation();
    return (
        <Auth>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
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
                            <span className="absolute bottom-[15px] left-5">
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
                            Password
                            <Field
                                type="password"
                                id="password"
                                name="password"
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

                        <Button className="w-full rounded-lg bg-purple py-3 text-white hover:bg-hover-purple">
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </Auth>
    );
}
