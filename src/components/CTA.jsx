"use client";

import { useMemo, useState } from "react";

const projectOptions = [
  "Website Design & Development",
  "Landing Page",
  "E-commerce Website",
  "Industry Template",
  "Branding",
  "Website Maintenance",
  "Custom Project",
];

const pageOptions = [
  "1–3 pages",
  "4–6 pages",
  "7–10 pages",
  "11–15 pages",
  "15+ pages",
  "Not sure",
];

const timelineOptions = [
  "ASAP",
  "1–2 weeks",
  "1 month",
  "1–3 months",
  "Flexible / No deadline",
];

/* -----------------------------------------
   BASE PROJECT PRICING
----------------------------------------- */

const projectPricing = {
  "Website Design & Development": {
    min: 15000,
    max: 35000,
  },

  "Landing Page": {
    min: 8000,
    max: 15000,
  },

  "E-commerce Website": {
    min: 30000,
    max: 60000,
  },

  "Industry Template": {
    min: 8000,
    max: 20000,
  },

  Branding: {
    min: 5000,
    max: 15000,
  },

  "Website Maintenance": {
    min: 3000,
    max: 10000,
  },

  "Custom Project": {
    min: 25000,
    max: 75000,
  },
};


/* -----------------------------------------
   PAGE MULTIPLIER
----------------------------------------- */

const pageMultiplier = {
  "1–3 pages": 1,
  "4–6 pages": 1.2,
  "7–10 pages": 1.45,
  "11–15 pages": 1.7,
  "15+ pages": 2,
  "Not sure": 1.15,
};


/* -----------------------------------------
   TIMELINE MULTIPLIER
----------------------------------------- */

const timelineMultiplier = {
  ASAP: 1.3,
  "1–2 weeks": 1.15,
  "1 month": 1,
  "1–3 months": 0.95,
  "Flexible / No deadline": 0.95,
};


export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    pages: "",
    timeline: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("idle");


  /* -----------------------------------------
     CALCULATE ESTIMATE
  ----------------------------------------- */

  const estimate = useMemo(() => {
    if (
      !formData.projectType ||
      !formData.pages ||
      !formData.timeline
    ) {
      return null;
    }

    const pricing =
      projectPricing[formData.projectType];

    if (!pricing) {
      return null;
    }

    const pages =
      pageMultiplier[formData.pages] || 1;

    const timeline =
      timelineMultiplier[formData.timeline] || 1;

    const multiplier = pages * timeline;

    return {
      min:
        Math.round(
          (pricing.min * multiplier) / 1000
        ) * 1000,

      max:
        Math.round(
          (pricing.max * multiplier) / 1000
        ) * 1000,
    };
  }, [
    formData.projectType,
    formData.pages,
    formData.timeline,
  ]);


  /* -----------------------------------------
     FORMAT PRICE
  ----------------------------------------- */

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };


  /* -----------------------------------------
     HANDLE INPUT
  ----------------------------------------- */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  /* -----------------------------------------
     SUBMIT FORM
  ----------------------------------------- */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,

          estimatedMin: estimate?.min || "",
          estimatedMax: estimate?.max || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Something went wrong."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        pages: "",
        timeline: "",
        message: "",
        website: "",
      });

    } catch (error) {
      console.error(error);

      setStatus("error");
    }
  };


  return (
    <section
      id="contact"
      className="webaspace-cta relative overflow-hidden px-5 py-24 md:px-10 md:py-32"
    >

      {/* -----------------------------------------
          BACKGROUND GLOWS
      ----------------------------------------- */}

      <div className="cta-glow cta-glow-blue" />
      <div className="cta-glow cta-glow-purple" />
      <div className="cta-glow cta-glow-pink" />


      <div className="relative mx-auto max-w-6xl">

        <div className="cta-container relative overflow-hidden rounded-[2rem] border border-white/10 px-5 py-14 backdrop-blur-xl sm:px-8 md:rounded-[2.5rem] md:px-16 md:py-24">

          <div className="cta-grid" />
          <div className="cta-top-glow" />


          <div className="relative z-10">


            {/* -----------------------------------------
                HEADING
            ----------------------------------------- */}

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-7 flex items-center justify-center gap-3">

                <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                  Start something new
                </span>

                <span className="h-px w-8 bg-gradient-to-l from-transparent to-pink-400" />

              </div>


              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">

                Ready to build your
                <br />

                <span className="cta-gradient-text">
                  digital space?
                </span>

              </h2>


              <p className="mx-auto mt-7 max-w-xl text-sm font-medium leading-7 text-white/60 md:text-base">
                Tell us about your project and get an
                instant estimated price range.
              </p>

            </div>


            {/* -----------------------------------------
                FORM
            ----------------------------------------- */}

            <div className="mx-auto mt-14 max-w-4xl">

              {status === "success" ? (

                <SuccessMessage
                  onReset={() =>
                    setStatus("idle")
                  }
                />

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                >

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                  />


                  {/* -----------------------------------------
                      NAME + EMAIL
                  ----------------------------------------- */}

                  <div className="grid gap-5 md:grid-cols-2">

                    <FormField
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* -----------------------------------------
                      COMPANY
                  ----------------------------------------- */}

                  <div className="mt-5">

                    <FormField
                      label="Business / Company"
                      name="company"
                      type="text"
                      placeholder="Your business name"
                      value={formData.company}
                      onChange={handleChange}
                    />

                  </div>


                  {/* -----------------------------------------
                      PROJECT TYPE
                  ----------------------------------------- */}

                  <SelectField
                    label="What are you looking for?"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    options={projectOptions}
                    placeholder="Select a project type"
                    required
                  />


                  {/* -----------------------------------------
                      NUMBER OF PAGES
                  ----------------------------------------- */}

                  <SelectField
                    label="How many pages do you need?"
                    name="pages"
                    value={formData.pages}
                    onChange={handleChange}
                    options={pageOptions}
                    placeholder="Select number of pages"
                    required
                  />


                  {/* -----------------------------------------
                      TIMELINE
                  ----------------------------------------- */}

                  <SelectField
                    label="When do you want it?"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    options={timelineOptions}
                    placeholder="Select your timeline"
                    required
                  />


                  {/* -----------------------------------------
                      PRICE ESTIMATE
                  ----------------------------------------- */}

                  <PriceEstimate
                    estimate={estimate}
                    formatPrice={formatPrice}
                  />


                  {/* -----------------------------------------
                      MESSAGE
                  ----------------------------------------- */}

                  <div className="contact-field mt-7">

                    <label htmlFor="message">

                      Tell us about your project

                      <span className="text-pink-400">
                        {" "}*
                      </span>

                    </label>


                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell us what you're looking to build..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* ERROR */}

                  {status === "error" && (
                    <div className="contact-error">
                      Something went wrong.
                      Please try again.
                    </div>
                  )}


                  {/* -----------------------------------------
                      SUBMIT
                  ----------------------------------------- */}

                  <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">

                    <p className="max-w-sm text-xs font-medium leading-5 text-white/40">
                      The displayed price is an estimate.
                      Final pricing depends on your project
                      requirements.
                    </p>


                    <button
                      type="submit"
                      disabled={
                        status === "loading"
                      }
                      className="contact-submit group relative rounded-full p-[1px]"
                    >

                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80 blur-[2px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />


                      <span className="relative flex min-w-[180px] items-center justify-center gap-3 rounded-full bg-[#08080b] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 group-hover:bg-[#101014]">

                        {status === "loading" ? (

                          <>
                            <span className="contact-spinner" />
                            Sending...
                          </>

                        ) : (

                          <>
                            Send Inquiry

                            <span className="transition-transform duration-500 group-hover:translate-x-1">
                              →
                            </span>
                          </>

                        )}

                      </span>

                    </button>

                  </div>

                </form>
              )}

            </div>

          </div>


          {/* -----------------------------------------
              DECORATIVE CORNERS
          ----------------------------------------- */}

          <div className="cta-corner cta-corner-top-left" />
          <div className="cta-corner cta-corner-top-right" />
          <div className="cta-corner cta-corner-bottom-left" />
          <div className="cta-corner cta-corner-bottom-right" />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="contact-field">

      <label htmlFor={name}>

        {label}

        {required && (
          <span className="text-pink-400">
            {" "}*
          </span>
        )}

      </label>


      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />

    </div>
  );
}


/* =========================================================
   SELECT FIELD
========================================================= */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}) {
  return (
    <div className="contact-field mt-5">

      <label htmlFor={name}>

        {label}

        {required && (
          <span className="text-pink-400">
            {" "}*
          </span>
        )}

      </label>


      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >

        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}


/* =========================================================
   PRICE ESTIMATE
========================================================= */

function PriceEstimate({
  estimate,
  formatPrice,
}) {
  return (
    <div
      className={`price-estimate ${
        estimate
          ? "price-estimate-active"
          : ""
      }`}
    >

      {!estimate ? (

        <div className="price-empty">

          <div className="price-icon">
            ✦
          </div>

          <div>

            <h3>
              Get your estimated range
            </h3>

            <p>
              Select your project type,
              number of pages and timeline.
            </p>

          </div>

        </div>

      ) : (

        <div className="price-result">

          <div>

            <span className="price-label">
              Estimated project range
            </span>


            <div className="price-value">

              {formatPrice(estimate.min)}

              <span>—</span>

              {formatPrice(estimate.max)}

            </div>


            <p className="price-note">
              Based on your selected project,
              pages and timeline.
            </p>

          </div>


          <div className="price-spark">
            ✦
          </div>

        </div>

      )}

    </div>
  );
}


/* =========================================================
   SUCCESS MESSAGE
========================================================= */

function SuccessMessage({ onReset }) {
  return (
    <div className="contact-success">

      <div className="contact-success-icon">
        ✓
      </div>


      <h3 className="mt-6 text-2xl font-semibold text-white">
        Message sent successfully.
      </h3>


      <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-white/55">
        Thanks for reaching out to WebaSpace.
        We&apos;ll get back to you as soon as possible.
      </p>


      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
      >
        Send another message
      </button>

    </div>
  );
}