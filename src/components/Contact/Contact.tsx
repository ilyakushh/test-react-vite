import { useForm } from "react-hook-form";
import Photo from "../../assets/Photo.jpg";
import { socialNetworks } from "../../data/constants";
import styles from "./Contact.module.scss";
import { submitData } from "../../utils/api";

export type FormData = {
  name: string;
  email: string;
  message: string;
  agree: boolean;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onSubmit" });
  const onSubmit = (data: FormData) => {
    submitData(data);
  };
  return (
    <section className={styles.contact} id="contact">
      <img src={Photo} alt="Photo" />
      <div className={styles.content}>
        <p>Контакты</p>
        <h3>Свяжитесь со мной</h3>
        <h5>Любым удобным для вас способом:</h5>
        <div className={styles.socialNetworks}>
          {socialNetworks.map((item, id) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
            >
              <img src={item.image} alt="Facebook" />
            </a>
          ))}
        </div>
        <h5>Или оставьте ваши данные и я сама вам напишу:</h5>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.groupForm}>
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="name">
                Ваше имя
              </label>
              <input
                {...register("name", {
                  required: `Имя обязательно`,
                  pattern: {
                    value: /^[A-Za-z][a-z]*$/,
                    message: "Имя должно содержать только буквы.",
                  },
                })}
                type="text"
                id="name"
              />
              {errors.name && (
                <div className={styles.error}>{errors.name?.message}</div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.label}>
                Ваша почта
              </label>
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
            </div>
          </div>
          <div className={styles.message}>
            <label className={styles.label}>Ваше сообщение</label>
            <textarea {...register("message")}></textarea>
          </div>
          <div className={styles.checkbox}>
            <input
              {...register("agree", {
                required: "Вы должны принять Политику конфиденциальности",
              })}
              type="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox">
              Я согласен(а) с политикой конфиденциальности
            </label>
            {errors.agree && (
              <div className={styles.error}>{errors.agree.message}</div>
            )}
          </div>

          <div className={styles.submit}>
            <button type="submit">Отправить сообщение</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
