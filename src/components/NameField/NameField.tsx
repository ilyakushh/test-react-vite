import styles from "./NameField.module.scss";
import { FieldError, UseFormRegister } from "react-hook-form";
import type { FormData } from "../Contact/Contact";

type NameFieldProps = {
  register: UseFormRegister<FormData>;
  errors: {
    name?: FieldError;
  };
};

const NameField = ({ register, errors }: NameFieldProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>
        Ваше имя
        <input
          {...register("name", {
            required: `Имя обязательно`,
            pattern: {
              value: /^[A-Za-z][a-z]*$/,
              message: "Имя должно содержать только буквы.",
            },
          })}
          type="text"
        />
        {errors.name && (
          <div className={styles.error}>{errors.name?.message}</div>
        )}
      </label>
    </div>
  );
};

export default NameField;
