import React from "react";
import { Formik, Form, Field } from "formik";
import { CopyLinkIcon } from "@/public/assets/svgs";
import useFormValidation from "../hooks/useFormValidation";

export default function LinkInput() {
    const { LinkSchema } = useFormValidation();
    return (
        <Formik
            initialValues={{
                link: "",
            }}
            validationSchema={LinkSchema}
            onSubmit={async (values) => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label
                        htmlFor="Link"
                        className="relative flex flex-col text-xs text-dark-grey"
                    >
                        Link
                        <Field
                            type="link"
                            id="link"
                            name="link"
                            className={`mt-1 rounded-lg border py-3 pl-11 pr-4 text-base outline-none ${errors.link && touched.link ? "border-focus-red text-focus-red focus:border-focus-red focus:ring-focus-red" : "focus:border-purple"}`}
                            placeholder="Enter your link"
                        />
                        <span className="absolute bottom-[13px] left-3">
                            <CopyLinkIcon />
                        </span>
                        <span className="absolute bottom-[15px] right-5 text-xs text-red-600">
                            {errors.link && touched.link ? (
                                <div>{errors.link}</div>
                            ) : null}
                        </span>
                    </label>
                </Form>
            )}
        </Formik>
    );
}
