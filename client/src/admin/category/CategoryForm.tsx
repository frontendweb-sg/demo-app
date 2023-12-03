import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { categoryService } from "@/services/category.services";
import { AppContent } from "@/utils/AppContent";
import { useFormik } from "formik";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type CategoryFormProps = {
  category?: ICategory;
  onClose?: () => void;
};
const CategoryForm = memo(function CategoryForm({
  category,
  onClose,
}: CategoryFormProps) {
  const navigate = useNavigate();
  const {
    isSubmitting,
    isValid,
    dirty,
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: category
      ? {
          ...categoryService.getIntialValues(),
          title: category?.title,
          description: category?.description,
        }
      : categoryService.getIntialValues(),
    async onSubmit(values, formikHelpers) {},
  });

  const enabled = isSubmitting || !(dirty && isValid);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="title"
        label="Category name"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors}
        touched={touched}
        placeholder="Category name"
      />

      <Textarea
        name="description"
        label="Description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors}
        touched={touched}
      />
      <div className=" mt-3 pt-3 flex justify-end">
        <Button
          color="secondary"
          onClick={onClose ? onClose : () => navigate("/admin/category")}
          className="mr-2"
        >
          {AppContent.cancel}
        </Button>
        <Button disabled={enabled} type="submit">
          {category ? AppContent.update : AppContent.add}
        </Button>
      </div>
    </Form>
  );
});

export default CategoryForm;
