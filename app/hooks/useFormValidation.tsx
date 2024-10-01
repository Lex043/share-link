import * as Yup from "yup";

export default function useFormValidation() {
    const RegisterSchema = Yup.object().shape({
        email: Yup.string().email("invalid email").required("Can't be empty"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Please check again"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("createPassword")], "Passwords must match")
            .required("Please confirm your password"),
    });

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("invalid email").required("Can't be empty"),
        password: Yup.string()
            .min(8, "password must be at least 8 characters")
            .required("Please check again"),
    });

    const LinkSchema = Yup.object().shape({
        link: Yup.string().url("Please check again").required("Can't be empty"),
    });
    return { RegisterSchema, LoginSchema, LinkSchema };
}
