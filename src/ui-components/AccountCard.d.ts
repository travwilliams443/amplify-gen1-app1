/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountCardOverridesProps = {
    AccountCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Account Title"?: PrimitiveOverrideProps<FlexProps>;
    "Account Type"?: PrimitiveOverrideProps<TextProps>;
    "Account Number"?: PrimitiveOverrideProps<TextProps>;
    Balance?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AccountCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    account?: any;
} & {
    overrides?: AccountCardOverridesProps | undefined | null;
}>;
export default function AccountCard(props: AccountCardProps): React.ReactElement;
