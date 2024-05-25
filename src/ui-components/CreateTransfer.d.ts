/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateTransferInputValues = {
    fromAccountId?: string;
    fromAccountNumber?: string;
    fromAccountHolderName?: string;
    toAccountId?: string;
    toAccountNumber?: string;
    toAccountHolderName?: string;
    amount?: number;
    currency?: string;
    transferDate?: string;
    status?: string;
    notes?: string;
};
export declare type CreateTransferValidationValues = {
    fromAccountId?: ValidationFunction<string>;
    fromAccountNumber?: ValidationFunction<string>;
    fromAccountHolderName?: ValidationFunction<string>;
    toAccountId?: ValidationFunction<string>;
    toAccountNumber?: ValidationFunction<string>;
    toAccountHolderName?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    currency?: ValidationFunction<string>;
    transferDate?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateTransferOverridesProps = {
    CreateTransferGrid?: PrimitiveOverrideProps<GridProps>;
    fromAccountId?: PrimitiveOverrideProps<TextFieldProps>;
    fromAccountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    fromAccountHolderName?: PrimitiveOverrideProps<TextFieldProps>;
    toAccountId?: PrimitiveOverrideProps<TextFieldProps>;
    toAccountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    toAccountHolderName?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    currency?: PrimitiveOverrideProps<TextFieldProps>;
    transferDate?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateTransferProps = React.PropsWithChildren<{
    overrides?: CreateTransferOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateTransferInputValues) => CreateTransferInputValues;
    onSuccess?: (fields: CreateTransferInputValues) => void;
    onError?: (fields: CreateTransferInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateTransferInputValues) => CreateTransferInputValues;
    onValidate?: CreateTransferValidationValues;
} & React.CSSProperties>;
export default function CreateTransfer(props: CreateTransferProps): React.ReactElement;
