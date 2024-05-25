/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarHeader2Props } from "./NavBarHeader2";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MarketingPricingProps } from "./MarketingPricing";
import { Features2x2Props } from "./Features2x2";
import { CTASectionProps } from "./CTASection";
import { MarketingFooterProps } from "./MarketingFooter";
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
export declare type SmallBizMainOverridesProps = {
    SmallBizMain?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader2?: NavBarHeader2Props;
    HeroLayout1?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    MarketingPricing?: MarketingPricingProps;
    Features2x2?: Features2x2Props;
    CTASection?: CTASectionProps;
    MarketingFooter?: MarketingFooterProps;
} & EscapeHatchProps;
export declare type SmallBizMainProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SmallBizMainOverridesProps | undefined | null;
}>;
export default function SmallBizMain(props: SmallBizMainProps): React.ReactElement;
