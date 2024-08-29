import { Formik, Field, Form } from "formik";

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ smth: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.smth);
        actions.resetForm();
      }}
    >
      <Form className="d-flex">
        <Field
          type="search"
          name="smth"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
