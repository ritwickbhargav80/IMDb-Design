import React from "react";
import ReactTooltip from "react-tooltip";

const Input = ({ htmlFor, label, icon, type, id, placeholder, autofocus }) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text prepend">
            <i className={icon + " fa-sm icon"} aria-hidden="true" />
          </div>
        </div>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          autoFocus={autofocus}
          required={true}
        />
      </div>
    </div>
  );
};

const Password = ({
  htmlFor,
  label,
  prependicon,
  type,
  id,
  placeholder,
  appendicon,
  onClick,
  register,
}) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor={htmlFor}>
        {label}
        {register && (
          <i
            className="fa-question-circle"
            aria-hidden="true"
            data-for="question-circle"
            data-tip
          />
        )}
        {register && (
          <ReactTooltip id="question-circle">
            <p>Passwords must be at least 8 characters.</p>
          </ReactTooltip>
        )}
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text prepend">
            <i className={prependicon + " fa-sm icon"} aria-hidden="true" />
          </div>
        </div>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          required={true}
        />
        <div className="input-group-append">
          <div className="input-group-text append">
            <i
              className={appendicon + " eye linked-icons"}
              toggle="#password"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Input, Password };
