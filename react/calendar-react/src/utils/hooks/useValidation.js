import { validateEvent, validators } from "../validation";

export default function useValidation(
  event,
  onValidation,
  validatorsObj = validators
) {
  return validateEvent(event, [
    validatorsObj.isCrossing,
    validatorsObj.exceedsMaxLength,
    validatorsObj.isNotValidLength,
  ]).then((errors) => {
    return errors.length > 0
      ? Promise.reject(errors)
      : Promise.resolve(onValidation(event));
  });
}
