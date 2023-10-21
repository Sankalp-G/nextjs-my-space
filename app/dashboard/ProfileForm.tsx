"use client";

import { FormEvent } from "react";
import type { User } from "@prisma/client";

interface Props {
  user?: User | null;
}

export default function ProfileForm({ user }: Props) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      image: formData.get("image"),
      bio: formData.get("bio"),
    };

    console.log(JSON.stringify(body));

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 -mt-2">
      <InputField
        label="Name: "
        id="name"
        placeholder="Your Name"
        value={user?.name ?? ""}
      />
      <InputField
        label="Email: "
        id="email"
        placeholder="Your Email"
        value={user?.email ?? ""}
      />
      <InputField
        label="Profile Image URL: "
        id="image"
        placeholder="Image URL"
        value={user?.image ?? ""}
      />
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text text-secondary-focus font-bold">
            Profile Bio:{" "}
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Your Bio"
          name="bio"
          defaultValue={user?.bio ?? ""}
        />
      </div>

      <button type="submit" className="btn btn-primary w-full max-w-sm mt-2">
        Save
      </button>
    </form>
  );
}

interface InputProps {
  label: string;
  id: string;
  placeholder?: string;
  value?: string;
}

function InputField({ label, id, placeholder, value }: InputProps) {
  return (
    <div className="form-control w-full max-w-sm">
      <label className="label" htmlFor={id}>
        <span className="label-text text-secondary-focus font-bold">
          {label}
        </span>
      </label>
      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        className="input input-bordered w-full max-w-sm"
      />
    </div>
  );
}
