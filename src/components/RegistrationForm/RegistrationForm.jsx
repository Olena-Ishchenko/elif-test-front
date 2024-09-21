import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";

const RegistrationForm = ({ onSubmit }) => {
  //   const eighteenYearsAgo = new Date();
  //   eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  const schemaValidation = Yup.object({
    fullname: Yup.string()
      .min(4, "Too Short")
      .max(50, "Too Long")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    dateofbirth: Yup.date()
      //   .max(new Date())
      .required("Date of birth is required"),
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
      <h2>Event registration</h2>
      <form
        onSubmit={handleSubmit((data) => {
          data.event_id = id;
          console.log(data);
          onSubmit(data);
          reset();
        })}
      >
        <div>
          <input
            {...register("fullname", { required: true })}
            placeholder="Full name"
          />
          {errors.fullname?.message && <p>{errors.fullname?.message}</p>}
          <input
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <input
            {...register("dateofbirth", { required: true })}
            placeholder="Date of birth"
          />
          {errors.dateofbirth?.message && <p>{errors.dateofbirth?.message}</p>}
          <label>
            <input {...register("radio")} type="radio" value="Social media" />{" "}
            Social media
          </label>
          <label>
            <input {...register("radio")} type="radio" value="Friends" /> Friens
          </label>
          <label>
            <input {...register("radio")} type="radio" value="Found myself" />{" "}
            Found myself
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
