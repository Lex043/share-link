"se client";

import React from "react";
import { Formik, Form, Field } from "formik";
import { CopyLinkIcon } from "@/public/assets/svgs";
import useFormValidation from "../hooks/useFormValidation";
import { linkStore } from "@/store/link";

export default function LinkInput({ linkId }: { linkId: string }) {
    const { LinkSchema } = useFormValidation();
    const updateLink = linkStore((state) => state.updateLink);
    const links = linkStore((state) => state.links);

    const existingLink = links.find((link) => link.id === linkId)?.link || "";

    return (
        <Formik
            initialValues={{
                link: existingLink,
            }}
            validationSchema={LinkSchema}
            onSubmit={async (value) => {
                console.log(value);
            }}
        >
            {({ errors, touched, handleChange, values }) => (
                <Form>
                    <label
                        htmlFor="Link"
                        className="relative flex flex-col text-xs text-dark-grey"
                    >
                        Link
                        <Field
                            type="link"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                handleChange(e);
                                updateLink(linkId, "link", e.target.value);
                            }}
                            id="link"
                            name="link"
                            value={values.link}
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
