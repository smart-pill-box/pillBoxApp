import * as React from "react"
import Svg, { Path, Mask, G } from "react-native-svg"

export default function WomanAvatar() {
  return (
    <Svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
    >
      <Path
        d="M60 120C26.835 120 0 93.125 0 60 0 26.835 26.875 0 60 0c33.165 0 60 26.875 60 60 .04 33.165-26.835 60-60 60z"
        fill="#66E7A9"
      />
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={120}
        height={120}
      >
        <Path
          d="M60 120C26.835 120 0 93.125 0 60 0 26.835 26.875 0 60 0c33.165 0 60 26.875 60 60 .04 33.165-26.835 60-60 60z"
          fill="#F7C0B5"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M93.76 110.523c-.28.2-.6.4-.88.6-.32.2-.6.4-.92.56-.28.16-.52.32-.8.48-.04.04-.08.04-.12.08-.92.56-1.88 1.08-2.84 1.56-.28.16-.6.32-.88.44 0 0-.04.04-.08.04l-.96.48c-.64.32-1.32.6-1.96.88-.32.16-.68.28-1 .4-.32.12-.68.28-1 .4-.32.12-.68.28-1 .4h-.04c-.32.12-.68.24-1 .36-.72.24-1.48.48-2.2.72-.24.08-.52.16-.76.24-.76.24-1.52.44-2.28.6-.28.08-.56.12-.88.2-.72.16-1.48.32-2.2.48-.16.04-.28.04-.44.08-.24.04-.52.08-.76.12-.36.04-.68.12-1.04.16-.16.04-.32.04-.48.08-.2.04-.44.08-.68.08-.64.08-1.32.16-1.96.24-.2.04-.44.04-.64.08h-.04c-.28.04-.56.04-.84.08-.28.04-.56.04-.84.04-.16 0-.36.04-.52.04-.32 0-.6.04-.88.04-.4 0-.76.04-1.16.04h-2c-16.84-.24-32.04-7.4-42.84-18.76 0 0 0-.04-.04-.04 1.24-2.44 5.84-6.84 10.64-10.48 6.08-4.6 14.68-7.44 14.68-7.44s5.64-.92 26.56 3.44c15.96 3.36 22.76 17 25.08 23.28z"
          fill="#FEE4BF"
        />
        <Path
          d="M73.12 98.323c-.84 4.12-6.28 6.56-15.44 2.88-11.24-4.56-15.56-17.4-15.56-17.4-.6-9.2-2-17.08-2-17.08 13-1.12 28.36 14.08 28.36 14.08l1.76 7.52c.16.64.48 1.2.96 1.6.84 1.44 2.48 5.76 1.92 8.4z"
          fill="#FEE4BF"
        />
        <Path
          d="M71.2 89.963c-7.64-.4-13.28-1.52-19.32-12.36 5.12 4.52 11.16 6.24 17.52 7.04l.84 3.68c.16.68.48 1.24.96 1.64z"
          fill="#EFBDA5"
        />
        <Path
          d="M87 41.763c.72 3.36 1.08 6.08-.88 15.04-1.96 8.96 1.8 17.92-7.64 26.12-6.36 5.52-17.48 6.56-26.36.52-3-2.04-5.76-4.88-8-8.6-1.76-2.92-3.8-5.68-6.08-8.2-3.16-3.44-6.96-10.36-5.08-22.6 3.04-19.92 22.76-22.2 34.4-20 11.64 2.2 17.68 8.84 19.64 17.72z"
          fill="#FEE4BF"
        />
        <Path
          d="M48.72 57.403s-1.24-6-7.08-5.28c-5.04.64-6.8 12.72 4.64 16.08"
          fill="#FEE4BF"
        />
        <Path
          d="M45.92 62.723s-1.44-.92-1.28-2.52c.24-1.88 0-3.04-.88-3.4-2.2-.92-2.64 1.64-2.56 1.96"
          stroke="#423232"
          strokeWidth={1.24418}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M76.44 66.603s1.52.08 2.96-1.64c.8-.96 1.48-2.16 1.04-2.52-.44-.4-7.68.72-8.16 1.68-.48.96 2.32 2.48 4.16 2.48z"
          fill="#EFBDA5"
        />
        <Path
          d="M77.64 53.163s.08 3.8 2.52 8.04c1.08 1.88-.56 4.96-4.12 5.48"
          stroke="#423232"
          strokeWidth={1.24418}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity={0.42}
          d="M55.96 68.643c2.275 0 4.12-1.522 4.12-3.4s-1.845-3.4-4.12-3.4c-2.276 0-4.12 1.522-4.12 3.4s1.844 3.4 4.12 3.4zM85.48 61.923c-.12 2.24-.08 4.44-.24 6.64-1.76-.4-3.04-1.72-3.04-3.28 0-1.68 1.4-3.04 3.28-3.36z"
          fill="#F2A5B2"
        />
        <Path
          d="M34.816 83.406s5.84-2.32 6.92-2.4l.08.92s-4.64 2-4.92 2.32c-.28.32-2.08-.84-2.08-.84z"
          fill="#7E5D6D"
        />
        <Path
          d="M106.896 135.326H5.776s.6-18.56 6.68-31.8c4.6-10 15.64-16.6 23.68-19.48 2.28-.8 4.04-1.68 5.68-2.12 0 .2.12 1.68.12 1.84 0 0 6.64 9.16 21.44 9.04 8.88-.04 6.4-5.8 6.4-5.8.76-.16 1.48-.36 2.2-.6.24-.08 1.92-.76 2.12-.84 5.16 1.36 11.48 5.2 20.64 12.88 10.32 8.68 12.16 36.88 12.16 36.88z"
          fill="#E89D6B"
        />
        <Mask
          id="b"
          maskUnits="userSpaceOnUse"
          x={5}
          y={81}
          width={102}
          height={55}
        >
          <Path
            d="M106.896 135.326H5.776s.6-18.56 6.68-31.8c4.6-10 15.64-16.6 23.68-19.48 2.28-.8 4.04-1.68 5.68-2.12 0 .2.12 1.68.12 1.84 0 0 6.64 9.16 21.44 9.04 8.88-.04 6.4-5.8 6.4-5.8.76-.16 1.48-.36 2.2-.6.24-.08 1.92-.76 2.12-.84 5.16 1.36 11.48 5.2 20.64 12.88 10.32 8.68 12.16 36.88 12.16 36.88z"
            fill="#E89D6B"
          />
        </Mask>
        <G mask="url(#b)">
          <Path
            d="M26.536 81.046c2.2.08 3.32.12 5.52.08 1.96 1.16 2.92 1.72 4.92 2.8 2.04-.12 3.08-.2 5.12-.44 2.04.96 3.04 1.44 5.08 2.36 2.08-.32 3.12-.52 5.16-.92 2.08.8 3.16 1.16 5.24 1.84 2.08-.52 3.12-.84 5.2-1.44 2.16.56 3.24.84 5.4 1.32 2.08-.76 3.12-1.12 5.2-1.96 2.2.36 3.32.52 5.52.8 2.04-.96 3.08-1.44 5.12-2.48 2.24.12 3.36.16 5.6.2 2-1.2 3-1.8 5-3.04 2.52-.2 3.76-.32 6.28-.6-.2.96-.28 1.44-.44 2.4-2.08.24-3.16.36-5.24.52-2.04 1.28-3.04 1.92-5.12 3.12-2.28 0-3.4-.04-5.68-.16-2.08 1.04-3.12 1.56-5.2 2.52-2.24-.28-3.36-.44-5.6-.76-2.08.84-3.16 1.24-5.24 1.96-2.2-.48-3.28-.76-5.44-1.32-2.08.6-3.16.92-5.24 1.44-2.12-.72-3.2-1.08-5.32-1.88-2.08.4-3.12.6-5.24.92-2.08-.92-3.08-1.36-5.16-2.36-2.08.2-3.12.28-5.16.4-2-1.08-3-1.64-4.96-2.84-1.84 0-2.76 0-4.6-.08-.28-.92-.4-1.4-.72-2.4zM25.976 91.206c2.2.04 3.28.04 5.52-.04 2 1.12 3 1.64 5 2.68 2.04-.16 3.04-.28 5.08-.56 2.04.92 3.08 1.36 5.16 2.2 2.04-.36 3.04-.6 5.12-1.04 2.12.72 3.2 1.08 5.32 1.72 2.04-.6 3.08-.88 5.12-1.56 2.16.52 3.28.76 5.44 1.2 2.04-.8 3.04-1.2 5.08-2.08 2.24.32 3.32.44 5.56.64 2-1 3-1.52 5-2.6 2.24.08 3.4.08 5.64.04 1.96-1.2 2.92-1.84 4.88-3.12 2.52-.24 3.8-.36 6.32-.72-.16.96-.2 1.44-.36 2.36-2.12.28-3.16.4-5.24.6-2 1.32-2.96 1.96-4.96 3.2-2.28.04-3.44.04-5.72-.04-2.04 1.08-3.04 1.6-5.08 2.64-2.24-.2-3.4-.32-5.64-.64-2.04.88-3.08 1.28-5.16 2.08-2.2-.44-3.32-.68-5.52-1.2-2.08.68-3.08.96-5.16 1.56-2.16-.64-3.24-1-5.36-1.72-2.08.44-3.08.68-5.16 1.04-2.08-.84-3.16-1.28-5.24-2.24-2.04.24-3.08.36-5.12.56-2.04-1.04-3.04-1.6-5.04-2.72-1.84.04-2.76.08-4.56.04-.4-.88-.56-1.36-.92-2.28zM25.416 101.206c2.16-.04 3.28-.08 5.48-.16 2 1.08 3.04 1.6 5.08 2.56 2-.24 3-.36 5-.68 2.08.88 3.12 1.28 5.24 2.08 2-.44 3-.64 5.04-1.16 2.16.68 3.24 1 5.4 1.6 2-.64 3-.96 5-1.64 2.2.48 3.32.68 5.52 1.08 2-.84 3-1.24 4.96-2.16 2.24.24 3.36.36 5.6.52 1.96-1.04 2.96-1.56 4.88-2.68 2.28 0 3.4 0 5.68-.08 1.92-1.24 2.88-1.88 4.76-3.16 2.52-.28 3.8-.44 6.32-.84-.12.92-.16 1.4-.24 2.36-2.12.32-3.16.48-5.28.72-1.92 1.32-2.92 2-4.84 3.24-2.32.08-3.48.12-5.76.08-2 1.12-2.96 1.64-4.96 2.72-2.28-.16-3.4-.24-5.68-.52-2 .92-3 1.36-5.04 2.2-2.24-.36-3.36-.6-5.56-1.08-2.04.72-3.04 1.04-5.08 1.68-2.2-.6-3.28-.92-5.44-1.6-2.04.52-3.04.76-5.08 1.16-2.12-.8-3.2-1.24-5.28-2.12-2.04.32-3.04.44-5.08.68-2.08-1-3.08-1.52-5.12-2.6-1.8.08-2.72.12-4.52.16-.4-.92-.6-1.4-1-2.36zM24.816 111.166c2.16-.08 3.24-.16 5.4-.32 2.04 1.04 3.08 1.52 5.16 2.44 1.96-.28 2.96-.44 4.96-.8 2.12.84 3.2 1.24 5.32 1.96 1.96-.48 2.96-.72 4.96-1.28 2.16.64 3.28.92 5.44 1.44 1.96-.68 2.96-1.04 4.92-1.76 2.24.4 3.32.6 5.56.92 1.96-.88 2.92-1.32 4.88-2.24 2.28.2 3.4.28 5.68.4 1.92-1.04 2.88-1.6 4.8-2.72 2.28-.04 3.44-.08 5.72-.2 1.88-1.24 2.8-1.88 4.64-3.2 2.56-.32 3.84-.52 6.36-.96-.08.92-.08 1.4-.16 2.32-2.12.36-3.16.52-5.28.8-1.88 1.36-2.84 2-4.72 3.28-2.32.12-3.48.16-5.8.2a99.28 99.28 0 01-4.84 2.76c-2.28-.12-3.44-.16-5.72-.36-1.96.96-2.96 1.4-4.92 2.28-2.28-.32-3.4-.52-5.64-.92-2 .76-3 1.12-5 1.8-2.2-.52-3.32-.84-5.52-1.44-2 .56-3 .8-5 1.28-2.16-.76-3.24-1.12-5.4-1.96-2 .36-3 .52-5 .8-2.12-.96-3.16-1.44-5.2-2.48-1.8.16-2.68.2-4.48.28-.44-.92-.68-1.4-1.12-2.32zM24.256 121.006c2.12-.16 3.2-.24 5.36-.48 2.08.96 3.12 1.44 5.24 2.32 1.96-.32 2.92-.52 4.88-.92 2.16.76 3.24 1.16 5.4 1.84 1.96-.52 2.92-.8 4.84-1.4 2.2.56 3.32.84 5.52 1.32 1.92-.72 2.88-1.08 4.84-1.88 2.24.36 3.36.52 5.64.8 1.92-.92 2.84-1.36 4.76-2.32 2.28.16 3.44.2 5.72.28 1.88-1.08 2.8-1.64 4.68-2.8 2.32-.08 3.44-.12 5.76-.28 1.8-1.28 2.72-1.92 4.52-3.24 2.56-.36 3.84-.56 6.4-1.04-.04.92-.04 1.36-.08 2.28-2.12.4-3.16.56-5.28.88-1.84 1.36-2.76 2.04-4.6 3.32-2.32.2-3.52.24-5.84.32-1.88 1.16-2.84 1.76-4.72 2.84-2.32-.04-3.48-.08-5.8-.24-1.92 1-2.88 1.44-4.8 2.36-2.28-.28-3.44-.44-5.72-.8-1.96.8-2.92 1.16-4.88 1.88-2.24-.48-3.36-.76-5.6-1.32-1.96.6-2.96.88-4.92 1.4-2.2-.68-3.28-1.04-5.48-1.84-1.96.4-2.96.6-4.92.92-2.12-.88-3.2-1.36-5.32-2.32-1.76.2-2.64.28-4.4.4-.48-.88-.72-1.36-1.2-2.28z"
            fill="#FFFF8D"
          />
          <Path
            d="M40.296 87.486s2.16 7.96 18.84 9.96c16.72 1.96 16.88-8.56 13.2-14.48-3.68-5.92-29.08-4.48-31.8-1.64-2.72 2.84-.24 6.16-.24 6.16z"
            fill="#fff"
          />
        </G>
        <Path
          d="M25.576 135.326l-1.8-14.84M95.416 115.446s-1.2 2.92-.84 5.84 1.4 7.2-.08 14.04"
          stroke="#544D4D"
          strokeWidth={1.24418}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M34.816 83.406c.76-.24 2.08 0 2.48.68 1.56 2.56 5.32 10.04 6.88 24.88 1.24 11.6-.64 32.48-.64 32.48l-38.8-1.84s1.16-19.72 4.56-32.96c3.32-12.84 12.04-18.6 25.52-23.24zM75.056 85.846s12.36 23.24 8.76 54.28h26.72s-.16-21.08-6.16-34.44-27-20.84-27-20.84-1.32.64-2.32 1z"
          fill="#755B7A"
        />
        <Path
          d="M75.056 85.846l-.96-.28s1.4-.68 2-1.08l.36-.2s1.92.88 2.6 1.2c.68.32-2.36 1.8-2.36 1.8s-1.52-1.4-1.64-1.44z"
          fill="#7E5D6D"
        />
        <Path
          d="M43.736 105.246s-1.36-3.88-4.44-7.32c-2.84-3.2-8.04-8.16-8.4-9.28-.68-2.28 3.56-10.88 10.2-13.88v.28c0 .08 0 .16.04.24 0 .12.04.24.04.36 0 .08 0 .12.04.2.28 2.4.52 5.08.72 7.92v.04s-1.84.6-.52 9.76c.36 2.2 1.72 6.12 2.32 11.68zM82.056 106.486s-2.68-10.4-4-13.72c-1.32-3.28-3.8-7-3.92-7.2 1.56-.72 2.96-1.64 4.2-2.72 1.24-1.08 2.24-2.16 3.08-3.24 1 1.12 6.96 7.84 7.6 11.52.72 4.08-4.48 5.84-6.96 15.36z"
          fill="#4B3C4F"
        />
        <Path
          d="M68.843 48.605c.87.12 1.54-.8 1.225-1.68-.158-.48-.435-.92-.87-1.2-1.342-.84-6.359-.92-9.005 1-2.33 1.76 4.7 1.32 8.65 1.88zM79.785 49.044c-.711 0-1.146-.92-.79-1.68.197-.4.474-.76.869-.96 1.224-.6 4.503-.24 5.964 1.8 1.304 1.8-2.765.8-6.043.84z"
          fill="#423232"
        />
        <Path
          d="M67.46 53.645c-2.527-1.28-6.517-.32-6.517-.32M83.063 54.444s-1.027-1.12-4.819-.24M75.409 71.526c-1.037.456-1.535-.456-3.153.332-1.16.539-1.783.705-3.193-.125-.912-.58-2.032.25-3.11-1.327"
          stroke="#423232"
          strokeWidth={1.24418}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M97.148 86.316c-2.24-4.96-3.96-4.28-2.4-8.76 1.56-4.44-.44-7.6-4.56-11.8-3.92-4-4.32-8.36-4.2-9-.36 1.68-.52 3.4-.6 5.08-.12 2.24-.08 4.44-.24 6.64-.32 4.92-1.48 9.76-6.76 14.32-2.32 2-5.28 3.44-8.56 4.12-.88 2.68.44 4.6 3.32 4.92 2.88.32 4.08 4.64 10.6 6.68 9.76 3.16 15.64-7.24 13.4-12.2zM78.908 37.916c.84.44 1.56.04 2-.84 4.64-.72 5.72 8.56 5.88 9.12.16.6.24 2.28-.08 6.88-.2 2.56 14.68-15.6 1.08-23.28 1-1.48.28-8.84-8.08-10.64-3-.64-6.92 2.16-11.84 1.08-19.24-4.28-39.2-.2-37.64 25.2.36 5.56.72 11.56-8.72 15.56-10.96 4.64-10.4 16.76-2.68 19.24 3.2 1.04-7.36 8.24-1.2 14.64 3.2 3.36 8.92-3.44 14.72.24 8.76 5.56 13.12 3.04 14.84.84 3.52-4.48-.84-13.48-.84-13.48s1.72-2.76 2.28-4.24c2.72-7.28-3.76-10.56-3.76-10.56-10-3.84-8.2-15-3.32-15.64 5.12-.64 6.72 3.92 7 5.04 0 0 4.52 6.24 13.24-8 8.64-14.24 13.36-13.2 17.12-11.16z"
          fill="#423232"
        />
        <Path
          d="M43.158 65.12v6.8"
          stroke="#FFDE55"
          strokeWidth={1.24418}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M48.558 81.04a5.95 5.95 0 01-4.24 1.76c-3.24 0-5.92-2.64-5.92-5.92 0-3.24 2.64-5.92 5.92-5.92 1.64 0 3.16.68 4.24 1.76-.72-.4-1.52-.64-2.4-.64-2.64 0-4.8 2.16-4.8 4.8 0 2.64 2.16 4.8 4.8 4.8.88.04 1.68-.2 2.4-.64z"
          fill="#FFDE55"
        />
        <Path
          d="M43.158 79.28a2.36 2.36 0 100-4.72 2.36 2.36 0 000 4.72z"
          fill="#FF6B57"
        />
        <Path
          d="M88.798 72.8c-.72-.4-1.52-.64-2.4-.64-.64 0-1.2.12-1.76.36.08-.48.2-.96.24-1.44 1.56.04 2.92.68 3.92 1.72zM88.838 81.04a5.95 5.95 0 01-4.24 1.76c-1.68 0-3.24-.72-4.32-1.88.64-.72 1.2-1.44 1.72-2.16.72 1.72 2.44 2.88 4.4 2.88.88.08 1.72-.16 2.44-.6z"
          fill="#FFDE55"
        />
        <Path
          d="M85.798 76.92a2.34 2.34 0 01-2.36 2.36c-.52 0-1-.16-1.4-.48.92-1.36 1.6-2.76 2.04-4.12.96.24 1.72 1.16 1.72 2.24z"
          fill="#FF6B57"
        />
      </G>
    </Svg>
  )
}

