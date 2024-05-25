/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarHeader2Props } from "./NavBarHeader2";
import { HeroLayout1Props } from "./HeroLayout1";
import { MarketingPricingProps } from "./MarketingPricing";
import { Features2x2Props } from "./Features2x2";
import { CTASectionProps } from "./CTASection";
import { MarketingFooterProps } from "./MarketingFooter";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type MarketingPageOverridesProps = {
    MarketingPage?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader2?: NavBarHeader2Props;
    HeroLayout1?: HeroLayout1Props;
    MarketingPricing?: MarketingPricingProps;
    Features2x2?: Features2x2Props;
    CTASection?: CTASectionProps;
    MarketingFooter?: MarketingFooterProps;
} & EscapeHatchProps;
export declare type MarketingPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingPageOverridesProps | undefined | null;
}>;
export default function MarketingPage(props: MarketingPageProps): React.ReactElement;
