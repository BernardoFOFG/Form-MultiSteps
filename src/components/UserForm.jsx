import React from "react";

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="flex items-center gap-4 justify-center">
      <div>
        <label htmlFor="name" className="text-slate-900">
          Nome:
        </label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite seu nome"
          required
          className="p-2 w-full"
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-slate-900">
          E-mail:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          className="p-2 w-full"
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
