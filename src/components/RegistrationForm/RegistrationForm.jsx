import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import css from "./RegistrationForm.module.css";

const RegistrationForm = ({ onSubmit }) => {
  const schemaValidation = Yup.object({
    fullname: Yup.string()
      .required("Name is required")
      .min(4, "Too Short")
      .max(50, "Too Long"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    dateofbirth: Yup.string()
      .required("Date of birth is required")
      .matches(/^\d{2}-\d{2}-\d{4}$/, "sample dd-mm-yyyy"),
  });

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  return (
    <div>
      <h2 className={css.registrTitle}>Event registration</h2>
      <form
        onSubmit={handleSubmit((data) => {
          data.event_id = id;
          console.log(data);
          onSubmit(data);
          reset();
        })}
      >
        <div className={css.registrForm}>
          <label className={css.formLabel}>
            Full name
            <input
              className={css.formInput}
              {...register("fullname", { required: true })}
            />
          </label>
          {errors.fullname?.message && <p>{errors.fullname?.message}</p>}
          <label className={css.formLabel}>
            Email
            <input
              className={css.formInput}
              {...register("email", { required: true })}
            />
          </label>
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <label className={css.formLabel}>
            Date of birth
            <input
              className={css.formInput}
              {...register("dateofbirth", { required: true })}
            />
          </label>
          {errors.dateofbirth?.message && <p>{errors.dateofbirth?.message}</p>}
          <div className={css.formRadioContainer}>
            <p className={css.formRadioText}>
              Where did you hear about this event?
            </p>
            <div className={css.formRadioInputs}>
              <label>
                <input
                  {...register("radio")}
                  type="radio"
                  value="Social media"
                />{" "}
                Social media
              </label>
              <label>
                <input {...register("radio")} type="radio" value="Friends" />{" "}
                Friens
              </label>
              <label>
                <input
                  {...register("radio")}
                  type="radio"
                  value="Found myself"
                />{" "}
                Found myself
              </label>
            </div>
          </div>
        </div>
        <button className={css.formBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
