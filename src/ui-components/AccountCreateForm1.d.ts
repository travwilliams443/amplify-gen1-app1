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
export declare type AccountCreateForm1InputValues = {
    accountNumber?: string;
    accountHolderName?: string;
    accountType?: string;
    balance?: number;
    currency?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type AccountCreateForm1ValidationValues = {
    accountNumber?: ValidationFunction<string>;
    accountHolderName?: ValidationFunction<string>;
    accountType?: ValidationFunction<string>;
    balance?: ValidationFunction<number>;
    currency?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountCreateForm1OverridesProps = {
    AccountCreateForm1Grid?: PrimitiveOverrideProps<GridProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    accountHolderName?: PrimitiveOverrideProps<TextFieldProps>;
    accountType?: PrimitiveOverrideProps<TextFieldProps>;
    balance?: PrimitiveOverrideProps<TextFieldProps>;
    currency?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountCreateForm1Props = React.PropsWithChildren<{
    overrides?: AccountCreateForm1OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountCreateForm1InputValues) => AccountCreateForm1InputValues;
    onSuccess?: (fields: AccountCreateForm1InputValues) => void;
    onError?: (fields: AccountCreateForm1InputValues, errorMessage: string) => void;
    onChange?: (fields: AccountCreateForm1InputValues) => AccountCreateForm1InputValues;
    onValidate?: AccountCreateForm1ValidationValues;
} & React.CSSProperties>;
export default function AccountCreateForm1(props: AccountCreateForm1Props): React.ReactElement;
