import Image from "next/image";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";
import yardsale from "@logos/logo_yard_sale.svg";
import styles from "@styles/Login.module.scss";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
});

function Login() {
    const auth = useAuth();
    const router = useRouter();

    const handleSubmit = async (values, { setSubmitting }) => {
        const { email, password } = values;
        try {
            await auth.signIn(email, password);
            router.push("/Dashboard");
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={styles.Login}>
            <div className={styles["Login-container"]}>
                <div>
                    <Image
                        src={yardsale}
                        alt="logo"
                        className={styles.logo}
                        width={150}
                        height={150}
                    />
                </div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({
                        errors,
                        touched,
                        isValid,
                        dirty,
                        handleChange,
                        handleBlur,
                        isSubmitting,
                    }) => (
                        <Form className="mt-8 flex flex-col">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="email-addres"
                                    className={`${styles.label} ${
                                        touched.email && errors.email
                                            ? "text-red-500"
                                            : "text-black"
                                    }`}
                                >
                                    Email address
                                </label>
                                <Field
                                    id="email-addres"
                                    type="email"
                                    name="email"
                                    autoCompete="email"
                                    required
                                    placeholder="yhailton@mail.com"
                                    className={`${styles.input} ${
                                        styles["input-email"]
                                    } bg-text-input-field text-md ${
                                        touched.email && errors.email
                                            ? "border-red-500"
                                            : "border-0"
                                    } rounded-t-md focus:outline-none focus:ring-hospital-green focus:border-hospital-green focus:z-10 `}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email ? (
                                    <div className="text-hospital-green text-sm">
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="password"
                                    className={`${styles.label} ${
                                        touched.password && errors.password
                                            ? "text-red-500"
                                            : "text-black"
                                    }`}
                                >
                                    Password
                                </label>
                                <Field
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="*********"
                                    required
                                    className={`${styles.input} ${
                                        styles["input-password"]
                                    } bg-text-input-field text-md ${
                                        touched.password && errors.password
                                            ? "border-red-500"
                                            : "border-0"
                                    } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-hospital-green focus:border-hospital-green focus:z-10`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password ? (
                                    <div className="text-hospital-green text-sm">
                                        {errors.password}
                                    </div>
                                ) : null}
                            </div>
                            {/* this blick display the loginError massage */}
                            {auth.loginError && (
                                <div className="text-red-500 text-sm text-center mb-4">
                                    {auth.loginError}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={
                                    Object.keys(errors).length > 0 ||
                                    !isValid ||
                                    !dirty ||
                                    isSubmitting
                                }
                                className={`${styles["primary-button"]} ${
                                    styles["login-button"]
                                } text-white text-md ${
                                    errors.email || errors.password
                                        ? "bg-very-light-pink cursor-not-allowed"
                                        : "bg-hospital-green"
                                }`}
                            >
                                Log in
                            </button>
                            <Link
                                href="./NewPassword"
                                className={`${styles.link} text-hospital-green text-sm text-center mb-2`}
                            >
                                Forgot my password
                            </Link>
                            <div>
                                <Link
                                    href="./CreateAccount"
                                    type="submit"
                                    className={`${styles["secondary-button"]} ${styles["signup-button"]} flex justify-center items-center bg-white border border-hospital-green text-md`}
                                >
                                    Sign up
                                </Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;
