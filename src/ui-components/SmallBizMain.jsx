/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NavBarHeader2 from "./NavBarHeader2";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
import MarketingPricing from "./MarketingPricing";
import Features2x2 from "./Features2x2";
import CTASection from "./CTASection";
import MarketingFooter from "./MarketingFooter";
export default function SmallBizMain(props) {
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
      {...getOverrideProps(overrides, "SmallBizMain")}
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
      <Flex
        gap="0"
        direction="row"
        width="1437px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeroLayout1")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="720px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="120px 120px 120px 120px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Left")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "HeroMessage")}
          >
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Message")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="30px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Build full-stack web and mobile apps in hours. Easy to start, easy to scale"
                {...getOverrideProps(overrides, "Heading")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed."
                {...getOverrideProps(overrides, "Body")}
              ></Text>
            </Flex>
            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Get started"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
          <TextField
            width="300px"
            height="unset"
            shrink="0"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="720px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Right")}
        >
          <Image
            width="720px"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
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
