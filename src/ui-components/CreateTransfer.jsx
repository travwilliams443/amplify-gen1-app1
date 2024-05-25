/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { AccountTransfer } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CreateTransfer(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fromAccountId: "",
    fromAccountNumber: "",
    fromAccountHolderName: "",
    toAccountId: "",
    toAccountNumber: "",
    toAccountHolderName: "",
    amount: "",
    currency: "",
    transferDate: "",
    status: "",
    notes: "",
  };
  const [fromAccountId, setFromAccountId] = React.useState(
    initialValues.fromAccountId
  );
  const [fromAccountNumber, setFromAccountNumber] = React.useState(
    initialValues.fromAccountNumber
  );
  const [fromAccountHolderName, setFromAccountHolderName] = React.useState(
    initialValues.fromAccountHolderName
  );
  const [toAccountId, setToAccountId] = React.useState(
    initialValues.toAccountId
  );
  const [toAccountNumber, setToAccountNumber] = React.useState(
    initialValues.toAccountNumber
  );
  const [toAccountHolderName, setToAccountHolderName] = React.useState(
    initialValues.toAccountHolderName
  );
  const [amount, setAmount] = React.useState(initialValues.amount);
  const [currency, setCurrency] = React.useState(initialValues.currency);
  const [transferDate, setTransferDate] = React.useState(
    initialValues.transferDate
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFromAccountId(initialValues.fromAccountId);
    setFromAccountNumber(initialValues.fromAccountNumber);
    setFromAccountHolderName(initialValues.fromAccountHolderName);
    setToAccountId(initialValues.toAccountId);
    setToAccountNumber(initialValues.toAccountNumber);
    setToAccountHolderName(initialValues.toAccountHolderName);
    setAmount(initialValues.amount);
    setCurrency(initialValues.currency);
    setTransferDate(initialValues.transferDate);
    setStatus(initialValues.status);
    setNotes(initialValues.notes);
    setErrors({});
  };
  const validations = {
    fromAccountId: [{ type: "Required" }],
    fromAccountNumber: [{ type: "Required" }],
    fromAccountHolderName: [{ type: "Required" }],
    toAccountId: [{ type: "Required" }],
    toAccountNumber: [{ type: "Required" }],
    toAccountHolderName: [{ type: "Required" }],
    amount: [{ type: "Required" }],
    currency: [{ type: "Required" }],
    transferDate: [{ type: "Required" }],
    status: [{ type: "Required" }],
    notes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fromAccountId,
          fromAccountNumber,
          fromAccountHolderName,
          toAccountId,
          toAccountNumber,
          toAccountHolderName,
          amount,
          currency,
          transferDate,
          status,
          notes,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new AccountTransfer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreateTransfer")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>From account id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={fromAccountId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId: value,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.fromAccountId ?? value;
          }
          if (errors.fromAccountId?.hasError) {
            runValidationTasks("fromAccountId", value);
          }
          setFromAccountId(value);
        }}
        onBlur={() => runValidationTasks("fromAccountId", fromAccountId)}
        errorMessage={errors.fromAccountId?.errorMessage}
        hasError={errors.fromAccountId?.hasError}
        {...getOverrideProps(overrides, "fromAccountId")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>From account number</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={fromAccountNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber: value,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.fromAccountNumber ?? value;
          }
          if (errors.fromAccountNumber?.hasError) {
            runValidationTasks("fromAccountNumber", value);
          }
          setFromAccountNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("fromAccountNumber", fromAccountNumber)
        }
        errorMessage={errors.fromAccountNumber?.errorMessage}
        hasError={errors.fromAccountNumber?.hasError}
        {...getOverrideProps(overrides, "fromAccountNumber")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>From account holder name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={fromAccountHolderName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName: value,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.fromAccountHolderName ?? value;
          }
          if (errors.fromAccountHolderName?.hasError) {
            runValidationTasks("fromAccountHolderName", value);
          }
          setFromAccountHolderName(value);
        }}
        onBlur={() =>
          runValidationTasks("fromAccountHolderName", fromAccountHolderName)
        }
        errorMessage={errors.fromAccountHolderName?.errorMessage}
        hasError={errors.fromAccountHolderName?.hasError}
        {...getOverrideProps(overrides, "fromAccountHolderName")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>To account id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={toAccountId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId: value,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.toAccountId ?? value;
          }
          if (errors.toAccountId?.hasError) {
            runValidationTasks("toAccountId", value);
          }
          setToAccountId(value);
        }}
        onBlur={() => runValidationTasks("toAccountId", toAccountId)}
        errorMessage={errors.toAccountId?.errorMessage}
        hasError={errors.toAccountId?.hasError}
        {...getOverrideProps(overrides, "toAccountId")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>To account number</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={toAccountNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber: value,
              toAccountHolderName,
              amount,
              currency,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.toAccountNumber ?? value;
          }
          if (errors.toAccountNumber?.hasError) {
            runValidationTasks("toAccountNumber", value);
          }
          setToAccountNumber(value);
        }}
        onBlur={() => runValidationTasks("toAccountNumber", toAccountNumber)}
        errorMessage={errors.toAccountNumber?.errorMessage}
        hasError={errors.toAccountNumber?.hasError}
        {...getOverrideProps(overrides, "toAccountNumber")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>To account holder name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={toAccountHolderName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName: value,
              amount,
              currency,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.toAccountHolderName ?? value;
          }
          if (errors.toAccountHolderName?.hasError) {
            runValidationTasks("toAccountHolderName", value);
          }
          setToAccountHolderName(value);
        }}
        onBlur={() =>
          runValidationTasks("toAccountHolderName", toAccountHolderName)
        }
        errorMessage={errors.toAccountHolderName?.errorMessage}
        hasError={errors.toAccountHolderName?.hasError}
        {...getOverrideProps(overrides, "toAccountHolderName")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Amount</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount: value,
              currency,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.amount ?? value;
          }
          if (errors.amount?.hasError) {
            runValidationTasks("amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("amount", amount)}
        errorMessage={errors.amount?.errorMessage}
        hasError={errors.amount?.hasError}
        {...getOverrideProps(overrides, "amount")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Currency</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={currency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency: value,
              transferDate,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.currency ?? value;
          }
          if (errors.currency?.hasError) {
            runValidationTasks("currency", value);
          }
          setCurrency(value);
        }}
        onBlur={() => runValidationTasks("currency", currency)}
        errorMessage={errors.currency?.errorMessage}
        hasError={errors.currency?.hasError}
        {...getOverrideProps(overrides, "currency")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Transfer date</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={transferDate && convertToLocal(new Date(transferDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency,
              transferDate: value,
              status,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.transferDate ?? value;
          }
          if (errors.transferDate?.hasError) {
            runValidationTasks("transferDate", value);
          }
          setTransferDate(value);
        }}
        onBlur={() => runValidationTasks("transferDate", transferDate)}
        errorMessage={errors.transferDate?.errorMessage}
        hasError={errors.transferDate?.hasError}
        {...getOverrideProps(overrides, "transferDate")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Status</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency,
              transferDate,
              status: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromAccountId,
              fromAccountNumber,
              fromAccountHolderName,
              toAccountId,
              toAccountNumber,
              toAccountHolderName,
              amount,
              currency,
              transferDate,
              status,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
