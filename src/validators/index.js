import { toast } from "sonner";

export const validate = (schema, values) => {
    const result = schema.safeParse(values);

    if (!result.success) {
        toast.error(result.error.issues[0].message);
        return false;
    }

    return true;
};
