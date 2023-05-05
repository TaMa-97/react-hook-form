import React from "react";
import { useForm } from "react-hook-form";
import { FormData } from "../types";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("送信データ確認用: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName">氏名</label>
        <input
          id="fullName"
          // {...register("fieldName", { validationRules })}
          {...register("fullName", { required: "※この項目は必須です" })}
        />
        {/* {errors.fieldName && <p>{errors.fieldName.message}</p>} */}
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "※この項目は必須です",
            pattern: {
              // 有効なメールアドレスであるかどうかをチェック
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "※無効なメールアドレスです",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

export default Form;
