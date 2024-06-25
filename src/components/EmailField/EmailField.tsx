import styles from "./EmailField.module.scss";
import { FieldError, UseFormRegister } from "react-hook-form";
import type { FormData } from "../Contact/Contact";

type EmailFieldProps = {
  register: UseFormRegister<FormData>;
  errors: {
    email?: FieldError;
  };
};

const EmailField = ({ register, errors }: EmailFieldProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="email" className={styles.label}>
        Ваша почта
        <input
          {...register("email", {
            required: "Почта необходима",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Недопустимый адрес электронной почты",
            },
          })}
          id="email"
          type="text"
        />
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
      </label>
    </div>
  );
};

export default EmailField;
