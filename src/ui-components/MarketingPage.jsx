/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NavBarHeader2 from "./NavBarHeader2";
import HeroLayout1 from "./HeroLayout1";
import MarketingPricing from "./MarketingPricing";
import Features2x2 from "./Features2x2";
import CTASection from "./CTASection";
import MarketingFooter from "./MarketingFooter";
import { Flex } from "@aws-amplify/ui-react";
export default function MarketingPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1440px"
      height="2832px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MarketingPage")}
      {...rest}
    >
      <NavBarHeader2
        display="flex"
        gap="10px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="16px 32px 16px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBarHeader2")}
      ></NavBarHeader2>
      <HeroLayout1
        display="flex"
        gap="0"
        direction="row"
        width="1437px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="Light"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></HeroLayout1>
      <MarketingPricing
        display="flex"
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="48px 48px 48px 48px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "MarketingPricing")}
      ></MarketingPricing>
      <Features2x2
        display="flex"
        gap="0"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="40px 160px 40px 160px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Features2x2")}
      ></Features2x2>
      <CTASection
        display="flex"
        gap="10px"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="160px 160px 160px 160px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "CTASection")}
      ></CTASection>
      <MarketingFooter
        display="flex"
        gap="32px"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="40px 40px 40px 40px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "MarketingFooter")}
      ></MarketingFooter>
    </Flex>
  );
}
