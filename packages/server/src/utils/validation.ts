import { plainToInstance } from "class-transformer";
import { validateOrReject, ValidationError } from "class-validator";

export async function validateDTO<T>(
  DTOClass: new () => T,
  payload: any
): Promise<T> {
  const dtoInstance = plainToInstance(DTOClass, payload);
  try {
    await validateOrReject(dtoInstance as object);
    return dtoInstance;
  } catch (errors) {
    const validationErrors = (errors as ValidationError[]).map(
      (err) => `${err.property}: ${Object.values(err.constraints!).join(", ")}`
    );
    throw new Error(validationErrors.join("; "));
  }
}
