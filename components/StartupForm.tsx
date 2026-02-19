"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const StartupForm = () => {
  const [error, setError] = React.useState<Record<string, string>>({});

  const [pitch, setPitch] = React.useState("**Hello world!!!**");

  const isPending = false;

  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="Startup Title"
          required
          className="startup-form_input"
        />

        {error.title && <p className="startup-form_error">{error.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          placeholder="Startup Description"
          required
          className="startup-form_textarea"
        />

        {error.description && (
          <p className="startup-form_error">{error.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <input
          id="category"
          name="category"
          placeholder="Startup Category (Tech, Health, Finance...)"
          required
          className="startup-form_input"
        />

        {error.category && (
          <p className="startup-form_error">{error.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link " className="startup-form_label">
          Image URL
        </label>
        <input
          id="link"
          name="link"
          placeholder="Image URL"
          required
          className="startup-form_input"
        />

        {error.link && <p className="startup-form_error">{error.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch " className="startup-form_label">
          Pitch
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {error.pitch && <p className="startup-form_error">{error.pitch}</p>}
      </div>

      <Button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
