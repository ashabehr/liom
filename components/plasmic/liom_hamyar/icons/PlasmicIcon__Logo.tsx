/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoIcon(props: LogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 434 434"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#Xp7SmR97XSloa)"}>
        <path
          d={
            "M101.138 295.916c-.549-5.967.399-12.297 1.024-18.63.869-8.817 2.18-17.575 3.706-26.304a463.36 463.36 0 018.69-39.475c4.217-16.008 8.831-31.9 14.492-47.465a178.038 178.038 0 014.739-11.708 32.859 32.859 0 013.099-5.5c4.5-6.394 10.765-8.765 18.372-8.086 1.843.146 3.662.506 5.421 1.073 7.84 2.6 11.321 9.187 8.982 17.114-1.109 3.765-2.979 7.226-4.528 10.814-10.889 25.216-19.977 51.056-26.698 77.697-2.284 9.057-4.506 18.125-5.907 27.37-1.11 7.329-1.705 14.693-.969 22.099.371 3.74 1.358 7.334 3.396 10.552 3.686 5.85 9.102 8.101 15.838 7.399 5.054-.528 9.553-2.627 13.812-5.255 5.161-3.182 10.26-6.462 15.397-9.673 2.181-1.359 4.472-2.491 7.035-2.944 2.613-.453 5.108-.104 7.114 1.705 3.884 3.499 6.322 7.777 6.177 13.16-.105 3.947-1.965 7.209-4.424 10.166-3.2 3.85-7.128 6.832-11.367 9.406-10.902 6.628-22.728 10.794-35.265 12.997-5.434.957-10.918 1.449-16.443.939-12.338-1.132-21.037-7.526-26.424-18.53-2.441-4.981-3.568-10.375-4.302-15.85-.545-4.195-.799-8.411-.967-13.071z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <g filter={"url(#Xp7SmR97XSlob)"}>
        <path
          d={
            "M261.71 114.143a23.79 23.79 0 0114.766-21.942 23.795 23.795 0 019.115-1.778c13.08.047 23.691 10.725 23.664 23.826-.023 13.183-10.721 23.757-24.001 23.718-12.961-.038-23.565-10.766-23.544-23.824z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <g filter={"url(#Xp7SmR97XSloc)"}>
        <path
          d={
            "M333.241 287.936a23.957 23.957 0 00-5.06-1.902c-8.31-2.153-16.421-4.931-24.454-7.924-3.6-1.345-3.908-2.382-2.011-5.753a580.819 580.819 0 015.208-8.994c7.019-12 13.314-24.361 17.847-37.543 3.014-8.765 5.02-17.747 5.291-26.687.005-2.2-.137-4.398-.425-6.579-1.187-8.152-4.026-15.533-10.142-21.302-4.605-4.348-10.117-7.079-16.23-8.709-8.706-2.318-17.324-2.402-25.864.693-12.873 4.664-22.315 13.296-28.53 25.36a106.582 106.582 0 00-11.652 40.876c-.876 11.301.967 22.147 5.733 32.463 2.74 5.918 6.37 11.263 10.543 16.259 1.782 2.134 1.782 3.397.122 5.412-10.189 12.342-21.232 23.819-34.19 33.332-2.251 1.652-4.429 3.396-6.288 5.504-2.864 3.254-3.414 6.738-1.229 10.569 3.786 6.639 9.326 10.396 17.137 10.291 3.381-.045 6.376-1.342 9.129-3.233 7.813-5.368 15.267-11.19 22.166-17.699 6.541-6.173 12.399-12.986 18.359-19.699 2.742-3.085 3.283-3.224 7.1-1.564a169.448 169.448 0 0031.16 10.178c3.605.794 7.171 1.114 10.642-.467 6.186-2.823 9.435-7.727 10.259-14.427.492-4.013-1.181-6.671-4.621-8.455zm-40.195-68.271c-4.415 12.539-10.768 24.073-18.154 35.075a5.95 5.95 0 01-.474.632c-1.102 1.232-1.918 1.211-2.943-.085a29.426 29.426 0 01-5.69-11.672c-1.931-8.262-1.633-16.529.109-24.778a62.748 62.748 0 018.264-20.378c2.599-4.166 6.173-7.11 11.031-8.183 4.342-.96 8.128 1.039 10.016 5.07 1.148 2.451 1.304 5.081 1.379 7.721-.075 5.779-1.642 11.213-3.538 16.598z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"Xp7SmR97XSloa"}
          x={"89.974"}
          y={"135.33"}
          width={"121.363"}
          height={"229.242"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"10"}></feOffset>

          <feGaussianBlur stdDeviation={"5.5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_90_14"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"3"}></feOffset>

          <feGaussianBlur stdDeviation={"2.5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_dropShadow_90_14"}
            result={"effect2_dropShadow_90_14"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect2_dropShadow_90_14"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-3.306"}></feOffset>

          <feGaussianBlur stdDeviation={"2.645"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend in2={"shape"} result={"effect3_innerShadow_90_14"}></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-1.984"}></feOffset>

          <feGaussianBlur stdDeviation={"1.653"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect3_innerShadow_90_14"}
            result={"effect4_innerShadow_90_14"}
          ></feBlend>
        </filter>

        <filter
          id={"Xp7SmR97XSlob"}
          x={"250.71"}
          y={"87.117"}
          width={"69.545"}
          height={"71.851"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"10"}></feOffset>

          <feGaussianBlur stdDeviation={"5.5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_90_14"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"3"}></feOffset>

          <feGaussianBlur stdDeviation={"2.5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_dropShadow_90_14"}
            result={"effect2_dropShadow_90_14"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect2_dropShadow_90_14"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-3.306"}></feOffset>

          <feGaussianBlur stdDeviation={"2.645"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend in2={"shape"} result={"effect3_innerShadow_90_14"}></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-1.984"}></feOffset>

          <feGaussianBlur stdDeviation={"1.653"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect3_innerShadow_90_14"}
            result={"effect4_innerShadow_90_14"}
          ></feBlend>
        </filter>

        <filter
          id={"Xp7SmR97XSloc"}
          x={"199.572"}
          y={"157.547"}
          width={"149.374"}
          height={"206.757"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"10"}></feOffset>

          <feGaussianBlur stdDeviation={"5.5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_90_14"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"3"}></feOffset>

          <feGaussianBlur stdDeviation={"2.5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_dropShadow_90_14"}
            result={"effect2_dropShadow_90_14"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect2_dropShadow_90_14"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-3.306"}></feOffset>

          <feGaussianBlur stdDeviation={"2.645"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend in2={"shape"} result={"effect3_innerShadow_90_14"}></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"-1.984"}></feOffset>

          <feGaussianBlur stdDeviation={"1.653"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect3_innerShadow_90_14"}
            result={"effect4_innerShadow_90_14"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default LogoIcon;
/* prettier-ignore-end */
